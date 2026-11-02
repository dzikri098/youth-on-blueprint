import React, { useEffect, useRef, useState, useCallback } from 'react';
import { IconZap, IconFlame, IconPlay, IconPause } from './Icons';

interface Runner {
  x: number;
  y: number;
  speed: number;
  lane: number;
  skinColor: string;
  jerseyColor: string;
  shortsColor: string;
  hairColor: string;
  hasHeadband: boolean;
  headbandColor?: string;
  hasCap: boolean;
  capColor?: string;
  hasGlasses: boolean;
  cheerTimer: number;
  height: number;
}

interface NoteParticle {
  x: number;
  y: number;
  vy: number;
  vx: number;
  char: string;
  color: string;
  alpha: number;
  life: number;
}

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  vRot: number;
}

export const PixelRunnerDJScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHypeActive, setIsHypeActive] = useState<boolean>(false);
  const [bpm, setBpm] = useState<number>(128);

  // Animation frame ref
  const animFrameId = useRef<number | null>(null);
  const beatTimerRef = useRef<number>(0);
  const hypeTimerRef = useRef<number>(0);

  // Runner state in ref to avoid re-renders on 60fps
  const runnersRef = useRef<Runner[]>([]);
  const notesRef = useRef<NoteParticle[]>([]);
  const confettiRef = useRef<ConfettiParticle[]>([]);
  const cloudsRef = useRef<{ x: number; y: number; speed: number; width: number }[]>([]);

  // Initialize Scene Entities
  useEffect(() => {
    // 7 unique runners with varied styles and speeds
    const initialRunners: Runner[] = [
      {
        x: 40,
        y: 202,
        speed: 1.75,
        lane: 0,
        skinColor: '#F5CBA7',
        jerseyColor: '#D7FF3F', // Electric Lime YOUTHON
        shortsColor: '#153F35',
        hairColor: '#2C1D11',
        hasHeadband: true,
        headbandColor: '#153F35',
        hasCap: false,
        capColor: '',
        hasGlasses: false,
        cheerTimer: 0,
        height: 22
      },
      {
        x: 110,
        y: 212,
        speed: 1.5,
        lane: 1,
        skinColor: '#E0AC69',
        jerseyColor: '#153F35', // Deep Forest Green
        shortsColor: '#FFFFFF',
        hairColor: '#1A1A1A',
        hasHeadband: false,
        hasCap: true,
        capColor: '#D7FF3F',
        hasGlasses: true,
        cheerTimer: 0,
        height: 23
      },
      {
        x: 180,
        y: 222,
        speed: 1.9,
        lane: 2,
        skinColor: '#F5CBA7',
        jerseyColor: '#FF6B4A', // Vibrant Coral
        shortsColor: '#153F35',
        hairColor: '#5C381E',
        hasHeadband: true,
        headbandColor: '#FFFFFF',
        hasCap: false,
        capColor: '',
        hasGlasses: false,
        cheerTimer: 0,
        height: 21
      },
      {
        x: 250,
        y: 204,
        speed: 1.6,
        lane: 0,
        skinColor: '#8D5524',
        jerseyColor: '#FFFFFF', // Crisp White
        shortsColor: '#256B5B',
        hairColor: '#111111',
        hasHeadband: false,
        hasCap: false,
        capColor: '',
        hasGlasses: false,
        cheerTimer: 0,
        height: 24
      },
      {
        x: 320,
        y: 218,
        speed: 1.4,
        lane: 1,
        skinColor: '#C68642',
        jerseyColor: '#9B51E0', // Festival Violet
        shortsColor: '#153F35',
        hairColor: '#2C1D11',
        hasHeadband: true,
        headbandColor: '#D7FF3F',
        hasCap: false,
        capColor: '',
        hasGlasses: false,
        cheerTimer: 0,
        height: 22
      },
      {
        x: 390,
        y: 226,
        speed: 2.1,
        lane: 2,
        skinColor: '#F5CBA7',
        jerseyColor: '#256B5B', // Mint Teal
        shortsColor: '#D7FF3F',
        hairColor: '#D35400',
        hasHeadband: false,
        hasCap: true,
        capColor: '#153F35',
        hasGlasses: true,
        cheerTimer: 0,
        height: 23
      },
      {
        x: -20,
        y: 208,
        speed: 1.8,
        lane: 1,
        skinColor: '#E0AC69',
        jerseyColor: '#D7FF3F',
        shortsColor: '#153F35',
        hairColor: '#1A1A1A',
        hasHeadband: true,
        headbandColor: '#FF6B4A',
        hasCap: false,
        capColor: '',
        hasGlasses: false,
        cheerTimer: 0,
        height: 22
      }
    ];

    runnersRef.current = initialRunners;

    // Clouds
    cloudsRef.current = [
      { x: 30, y: 25, speed: 0.15, width: 44 },
      { x: 170, y: 40, speed: 0.22, width: 56 },
      { x: 330, y: 18, speed: 0.18, width: 38 },
      { x: 440, y: 35, speed: 0.25, width: 48 }
    ];
  }, []);

  // Spawn DJ Beats Floating Notes
  const spawnNote = useCallback((x: number, y: number) => {
    const symbols = ['♪', '♫', '♩', '♬'];
    const colors = ['#D7FF3F', '#FFFFFF', '#FF6B4A', '#72F3C8'];
    const note: NoteParticle = {
      x: x + (Math.random() * 20 - 10),
      y: y + (Math.random() * 8 - 4),
      vx: (Math.random() - 0.5) * 0.8,
      vy: -1.2 - Math.random() * 0.8,
      char: symbols[Math.floor(Math.random() * symbols.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1.0,
      life: 0
    };
    notesRef.current.push(note);
    if (notesRef.current.length > 25) {
      notesRef.current.shift();
    }
  }, []);

  // Trigger Confetti Blast
  const triggerHype = () => {
    setIsHypeActive(true);
    setBpm(142);
    hypeTimerRef.current = 180; // ~3 seconds at 60fps

    // Create 45 confetti particles
    const confettiColors = ['#D7FF3F', '#FFFFFF', '#FF6B4A', '#256B5B', '#FFD166'];
    for (let i = 0; i < 45; i++) {
      confettiRef.current.push({
        x: 140 + (Math.random() * 120 - 60),
        y: 110 + (Math.random() * 40 - 20),
        vx: (Math.random() - 0.5) * 4.5,
        vy: -2.5 - Math.random() * 3.5,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        size: 3 + Math.random() * 3,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 12
      });
    }

    // Make runners cheer!
    runnersRef.current.forEach((r) => {
      r.cheerTimer = 90 + Math.floor(Math.random() * 40);
    });
  };

  // Main Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;

    let time = 0;
    const beatInterval = (60 / bpm) * 60; // frames per beat

    const render = () => {
      if (!isPlaying) {
        animFrameId.current = requestAnimationFrame(render);
        return;
      }

      time++;
      beatTimerRef.current++;

      // Handle Hype Mode Timer
      if (hypeTimerRef.current > 0) {
        hypeTimerRef.current--;
        if (hypeTimerRef.current === 0) {
          setIsHypeActive(false);
          setBpm(128);
        }
      }

      const isBeat = beatTimerRef.current % Math.floor(beatInterval) === 0;
      const beatFraction = (beatTimerRef.current % beatInterval) / beatInterval;
      // Pulse scale for speakers and DJ bobbing
      const pulse = Math.sin(beatFraction * Math.PI) * (isHypeActive ? 1.5 : 1.0);

      if (isBeat) {
        // Spawn musical notes from DJ booth
        spawnNote(138, 110);
        spawnNote(172, 108);
      }

      // Clear Canvas (Logical size: 480 x 270)
      ctx.fillStyle = '#EFF3E8'; // Warm off-white / light meadow
      ctx.fillRect(0, 0, 480, 270);

      // -------------------------------------------------------------
      // 1. SKY & DISTANT MOUNTAINS (West Java Silhouette)
      // -------------------------------------------------------------
      // Sky gradient blocks
      ctx.fillStyle = '#E3EAD8';
      ctx.fillRect(0, 0, 480, 75);
      ctx.fillStyle = '#E9EFE0';
      ctx.fillRect(0, 75, 480, 50);

      // Pixel Clouds
      cloudsRef.current.forEach((c) => {
        c.x += c.speed;
        if (c.x > 490) c.x = -c.width - 20;

        ctx.fillStyle = '#FFFFFF';
        // Draw pixelated cloud puff
        const cx = Math.floor(c.x);
        const cy = Math.floor(c.y);
        ctx.fillRect(cx + 8, cy, c.width - 16, 7);
        ctx.fillRect(cx + 4, cy + 4, c.width - 8, 9);
        ctx.fillRect(cx, cy + 7, c.width, 8);
        // Cloud shadow
        ctx.fillStyle = 'rgba(21, 63, 53, 0.06)';
        ctx.fillRect(cx + 4, cy + 13, c.width - 8, 2);
      });

      // Distant West Java Mountain Silhouettes (Layer 1 - Far)
      ctx.fillStyle = '#C4D5C2';
      ctx.beginPath();
      ctx.moveTo(0, 140);
      ctx.lineTo(60, 112);
      ctx.lineTo(130, 132);
      ctx.lineTo(210, 98); // Tangkuban Perahu shape
      ctx.lineTo(270, 102);
      ctx.lineTo(340, 136);
      ctx.lineTo(410, 115);
      ctx.lineTo(480, 140);
      ctx.lineTo(480, 175);
      ctx.lineTo(0, 175);
      ctx.fill();

      // Mountain Contour Step Highlight (Pixelated ridge)
      ctx.fillStyle = '#D6E4D4';
      ctx.fillRect(190, 100, 75, 2);
      ctx.fillRect(205, 102, 50, 2);

      // Midground Hills & Trees (Layer 2)
      ctx.fillStyle = '#9EB89A';
      ctx.beginPath();
      ctx.moveTo(0, 155);
      ctx.quadraticCurveTo(80, 138, 160, 150);
      ctx.quadraticCurveTo(270, 142, 380, 154);
      ctx.quadraticCurveTo(430, 146, 480, 155);
      ctx.lineTo(480, 185);
      ctx.lineTo(0, 185);
      ctx.fill();

      // Pixel Pine / Shade Trees on hillside
      const treePositions = [20, 65, 240, 275, 385, 435];
      treePositions.forEach((tx) => {
        ctx.fillStyle = '#1B473C';
        ctx.fillRect(tx + 4, 136, 4, 18);
        ctx.fillStyle = '#2C6E5A';
        ctx.fillRect(tx, 126, 12, 10);
        ctx.fillRect(tx + 2, 118, 8, 8);
        ctx.fillRect(tx + 4, 112, 4, 6);
      });

      // Festival Bunting / Pennants across the sky
      const flagColors = ['#D7FF3F', '#153F35', '#FF6B4A', '#FFFFFF'];
      for (let fx = 15; fx < 470; fx += 18) {
        const flagIndex = Math.floor(fx / 18) % flagColors.length;
        const fy = 62 + Math.sin(fx * 0.02) * 6;
        ctx.fillStyle = flagColors[flagIndex];
        ctx.beginPath();
        ctx.moveTo(fx, fy);
        ctx.lineTo(fx + 14, fy);
        ctx.lineTo(fx + 7, fy + 12);
        ctx.closePath();
        ctx.fill();
      }
      // String for bunting
      ctx.strokeStyle = 'rgba(21, 63, 53, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(10, 62);
      for (let fx = 10; fx <= 470; fx += 10) {
        ctx.lineTo(fx, 62 + Math.sin(fx * 0.02) * 6);
      }
      ctx.stroke();

      // -------------------------------------------------------------
      // 2. THE RUNNING TRACK & FESTIVAL GROUND
      // -------------------------------------------------------------
      // Grass verge
      ctx.fillStyle = '#7EA67A';
      ctx.fillRect(0, 175, 480, 16);
      // Small pixel flowers
      for (let i = 0; i < 480; i += 32) {
        ctx.fillStyle = '#D7FF3F';
        ctx.fillRect(i + 8, 178, 3, 3);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(i + 22, 181, 2, 2);
      }

      // Track Asphalt / Deep Running Turf
      ctx.fillStyle = '#1D453A';
      ctx.fillRect(0, 191, 480, 79);

      // Inner Lane Divider (dashed lines moving left to give forward runner feel)
      ctx.fillStyle = 'rgba(215, 255, 63, 0.45)';
      const trackOffset = (time * 1.6) % 24;
      for (let lx = -trackOffset; lx < 490; lx += 24) {
        ctx.fillRect(lx, 214, 14, 2);
        ctx.fillRect(lx + 8, 236, 14, 2);
      }

      // Track Bottom Curb
      ctx.fillStyle = '#122E27';
      ctx.fillRect(0, 264, 480, 6);

      // Distance Marker Sign (1.5 KM BEATS HUB) on the verge
      const signX = 390;
      const signY = 162;
      ctx.fillStyle = '#153F35';
      ctx.fillRect(signX + 7, signY + 12, 4, 18); // post
      ctx.fillStyle = '#D7FF3F';
      ctx.fillRect(signX - 12, signY - 2, 42, 16); // board
      ctx.fillStyle = '#153F35';
      ctx.font = 'bold 8px monospace';
      ctx.fillText('1.5 KM', signX - 6, signY + 9);

      // -------------------------------------------------------------
      // 3. THE LIVE DJ STAGE & PERFORMANCE SETUP
      // -------------------------------------------------------------
      const stageX = 75;
      const stageY = 138;
      const stageW = 140;

      // Stage Truss Foundation (Platform)
      ctx.fillStyle = '#0F2C24';
      ctx.fillRect(stageX, stageY + 34, stageW, 16);

      // Stage Front Banner: [YOUTHON]
      ctx.fillStyle = '#D7FF3F';
      ctx.fillRect(stageX + 6, stageY + 37, stageW - 12, 10);
      ctx.fillStyle = '#153F35';
      ctx.font = 'bold 8px monospace';
      ctx.fillText('YOUTHON // RHYTHM RUN', stageX + 16, stageY + 45);

      // Stage Back Truss Poles
      ctx.fillStyle = '#5A756C';
      ctx.fillRect(stageX + 4, stageY - 20, 4, 54);
      ctx.fillRect(stageX + stageW - 8, stageY - 20, 4, 54);
      ctx.fillRect(stageX + 4, stageY - 20, stageW - 8, 4);

      // Speaker Stack LEFT (Bass Subwoofers)
      const spkLX = stageX - 22;
      const spkLY = stageY + 6;
      ctx.fillStyle = '#152520';
      ctx.fillRect(spkLX, spkLY, 20, 44);
      // Pulsing Subwoofer Cones
      const wooferPulse = pulse * 2.5;
      ctx.fillStyle = '#2A433A';
      ctx.beginPath();
      ctx.arc(spkLX + 10, spkLY + 12, 6 + wooferPulse * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(spkLX + 10, spkLY + 30, 7 + wooferPulse * 0.7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#D7FF3F';
      ctx.fillRect(spkLX + 8, spkLY + 10, 4, 4);
      ctx.fillRect(spkLX + 8, spkLY + 28, 4, 4);

      // Speaker Stack RIGHT (Bass Subwoofers)
      const spkRX = stageX + stageW + 2;
      const spkRY = stageY + 6;
      ctx.fillStyle = '#152520';
      ctx.fillRect(spkRX, spkRY, 20, 44);
      ctx.fillStyle = '#2A433A';
      ctx.beginPath();
      ctx.arc(spkRX + 10, spkRY + 12, 6 + wooferPulse * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(spkRX + 10, spkRY + 30, 7 + wooferPulse * 0.7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#D7FF3F';
      ctx.fillRect(spkRX + 8, spkRY + 10, 4, 4);
      ctx.fillRect(spkRX + 8, spkRY + 28, 4, 4);

      // Sound Wave Shockwaves shooting out on beat
      if (pulse > 0.4) {
        ctx.strokeStyle = `rgba(215, 255, 63, ${0.8 * pulse})`;
        ctx.lineWidth = 1.5;
        // Left sound waves
        ctx.beginPath();
        ctx.arc(spkLX + 10, spkLY + 20, 16 + pulse * 12, Math.PI * 0.7, Math.PI * 1.3);
        ctx.stroke();
        // Right sound waves
        ctx.beginPath();
        ctx.arc(spkRX + 10, spkRY + 20, 16 + pulse * 12, -Math.PI * 0.3, Math.PI * 0.3);
        ctx.stroke();
      }

      // DJ Table / Console
      const tblX = stageX + 30;
      const tblY = stageY + 22;
      const tblW = 80;
      ctx.fillStyle = '#1A332B';
      ctx.fillRect(tblX, tblY, tblW, 14);
      // Table legs
      ctx.fillStyle = '#4B635B';
      ctx.fillRect(tblX + 6, tblY + 14, 4, 14);
      ctx.fillRect(tblX + tblW - 10, tblY + 14, 4, 14);

      // Dual Turntables on table
      // Left Turntable
      ctx.fillStyle = '#2C4037';
      ctx.fillRect(tblX + 8, tblY + 2, 18, 10);
      ctx.fillStyle = '#111A16';
      ctx.beginPath();
      ctx.arc(tblX + 17, tblY + 7, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#D7FF3F';
      ctx.fillRect(tblX + 16, tblY + 6, 2, 2);

      // Right Turntable
      ctx.fillStyle = '#2C4037';
      ctx.fillRect(tblX + tblW - 26, tblY + 2, 18, 10);
      ctx.fillStyle = '#111A16';
      ctx.beginPath();
      ctx.arc(tblX + tblW - 17, tblY + 7, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FF6B4A';
      ctx.fillRect(tblX + tblW - 18, tblY + 6, 2, 2);

      // Mixer with LED VU Meter
      ctx.fillStyle = '#21312B';
      ctx.fillRect(tblX + 32, tblY + 2, 16, 10);
      // LED Level Meters
      const ledH = Math.floor(pulse * 6);
      ctx.fillStyle = '#D7FF3F';
      ctx.fillRect(tblX + 35, tblY + 9 - ledH, 3, ledH);
      ctx.fillStyle = isHypeActive ? '#FF6B4A' : '#D7FF3F';
      ctx.fillRect(tblX + 41, tblY + 9 - ledH, 3, ledH);

      // Laptop / Screen
      ctx.fillStyle = '#D6DFD9';
      ctx.fillRect(tblX + 54, tblY - 5, 10, 7);
      ctx.fillStyle = '#153F35';
      ctx.fillRect(tblX + 57, tblY - 3, 4, 3); // screen logo

      // Animated 8-band Equalizer Floating Above Stage
      const eqX = stageX + 36;
      const eqY = stageY - 14;
      for (let b = 0; b < 8; b++) {
        const barH = 3 + Math.floor(Math.sin((time * 0.18) + b * 0.8) * 6 + 7 * pulse);
        ctx.fillStyle = b % 2 === 0 ? '#D7FF3F' : '#FFFFFF';
        ctx.fillRect(eqX + b * 8, eqY + 14 - barH, 5, barH);
      }

      // -------------------------------------------------------------
      // 4. THE DJ CHARACTER (Animated Body & Head Bob)
      // -------------------------------------------------------------
      const djX = tblX + 38;
      const djBob = Math.floor(pulse * 3); // moves up/down with beat
      const djY = stageY - 2 + djBob;

      // DJ Body / Hoodie
      ctx.fillStyle = isHypeActive ? '#FF6B4A' : '#D7FF3F';
      ctx.fillRect(djX - 6, djY + 12, 16, 12);
      ctx.fillStyle = '#153F35';
      ctx.fillRect(djX - 3, djY + 14, 10, 10); // inner graphic

      // DJ Head / Skin
      ctx.fillStyle = '#F5CBA7';
      ctx.fillRect(djX - 4, djY + 2, 12, 10);

      // DJ Shades / Sunglasses
      ctx.fillStyle = '#153F35';
      ctx.fillRect(djX - 3, djY + 4, 10, 3);
      ctx.fillStyle = '#D7FF3F';
      ctx.fillRect(djX - 2, djY + 5, 2, 1);
      ctx.fillRect(djX + 3, djY + 5, 2, 1);

      // DJ Hair / Cap
      ctx.fillStyle = '#1B1B1B';
      ctx.fillRect(djX - 5, djY, 14, 4);

      // DJ Headphones (Neon Lime)
      ctx.fillStyle = '#D7FF3F';
      ctx.fillRect(djX - 7, djY + 3, 3, 7); // left cup
      ctx.fillRect(djX + 8, djY + 3, 3, 7); // right cup
      ctx.fillRect(djX - 6, djY - 1, 16, 2); // headband band

      // DJ Arms
      if (isHypeActive || pulse > 0.6) {
        // DJ Raising Hand to Hyped Crowd!
        ctx.fillStyle = '#F5CBA7';
        // Left hand scratching
        ctx.fillRect(djX - 12, djY + 16, 6, 6);
        // Right hand pumping in the air
        ctx.fillRect(djX + 11, djY - 8, 4, 14);
        ctx.fillRect(djX + 10, djY - 12, 6, 6); // fist
      } else {
        // Normal DJ scratching posture
        ctx.fillStyle = '#F5CBA7';
        // Left arm to turntable
        ctx.fillRect(djX - 14, djY + 16, 10, 4);
        ctx.fillRect(djX - 16, djY + 18, 4, 4); // hand on disc
        // Right arm tweaking fader
        ctx.fillRect(djX + 8, djY + 16, 10, 4);
        ctx.fillRect(djX + 16, djY + 18, 4, 4); // hand on mixer
      }

      // -------------------------------------------------------------
      // 5. ANIMATED RUNNERS (The Fun Run Movement)
      // -------------------------------------------------------------
      // Sort runners by lane / y position for correct depth layering
      runnersRef.current.sort((a, b) => a.y - b.y);

      runnersRef.current.forEach((r) => {
        // Advance runner position
        r.x += r.speed * (isHypeActive ? 1.35 : 1.0);

        // Loop runner back with variation when leaving screen right
        if (r.x > 500) {
          r.x = -35;
          r.y = 198 + Math.floor(Math.random() * 32);
        }

        // Trigger reaction when running right past the DJ stage
        if (r.x > stageX && r.x < stageX + stageW + 40 && Math.random() < 0.03 && r.cheerTimer === 0) {
          r.cheerTimer = 45;
        }

        if (r.cheerTimer > 0) {
          r.cheerTimer--;
        }

        // 4-frame run cycle calculation
        const cycleSpeed = 0.22;
        const frame = Math.floor(time * cycleSpeed * (r.speed / 1.6)) % 4;
        const rx = Math.floor(r.x);
        const ry = Math.floor(r.y);
        const isCheering = r.cheerTimer > 0;

        // Bobbing vertical offset: runners dip slightly during stride
        const bob = frame === 1 || frame === 3 ? 1 : -1;

        // --- DRAW RUNNER SPRITE ---

        // 1. Legs (Pixelated running gait)
        ctx.fillStyle = r.shortsColor;
        ctx.fillRect(rx + 4, ry - 7 + bob, 8, 5); // shorts

        ctx.fillStyle = r.skinColor;
        if (frame === 0) {
          // Left leg forward, right leg back
          ctx.fillRect(rx + 8, ry - 2, 4, 6);
          ctx.fillRect(rx + 10, ry + 4, 4, 3); // front foot
          ctx.fillRect(rx + 2, ry - 2, 3, 4);
          ctx.fillRect(rx - 2, ry + 1, 4, 4); // back foot
        } else if (frame === 1) {
          // Passing stride 1
          ctx.fillRect(rx + 6, ry - 2, 4, 8);
          ctx.fillRect(rx + 3, ry - 1, 4, 5);
        } else if (frame === 2) {
          // Right leg forward, left leg back
          ctx.fillRect(rx + 1, ry - 2, 4, 6);
          ctx.fillRect(rx - 1, ry + 4, 4, 3);
          ctx.fillRect(rx + 8, ry - 2, 3, 4);
          ctx.fillRect(rx + 11, ry + 1, 4, 4);
        } else {
          // Passing stride 2
          ctx.fillRect(rx + 5, ry - 2, 4, 8);
          ctx.fillRect(rx + 7, ry - 1, 4, 5);
        }

        // Running shoes (Electric lime / white soles)
        ctx.fillStyle = '#D7FF3F';
        if (frame === 0) {
          ctx.fillRect(rx + 10, ry + 6, 5, 2);
          ctx.fillRect(rx - 3, ry + 4, 4, 2);
        } else if (frame === 2) {
          ctx.fillRect(rx - 2, ry + 6, 5, 2);
          ctx.fillRect(rx + 11, ry + 4, 4, 2);
        } else {
          ctx.fillRect(rx + 5, ry + 6, 5, 2);
        }

        // 2. Torso / Jersey
        ctx.fillStyle = r.jerseyColor;
        ctx.fillRect(rx + 3, ry - 17 + bob, 10, 10);
        // Jersey trim / bib number
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(rx + 6, ry - 14 + bob, 5, 4);
        ctx.fillStyle = '#153F35';
        ctx.fillRect(rx + 7, ry - 13 + bob, 3, 2);

        // 3. Arms
        ctx.fillStyle = r.skinColor;
        if (isCheering) {
          // Waving arm up in celebration to the DJ!
          ctx.fillRect(rx + 1, ry - 15 + bob, 3, 8);
          ctx.fillRect(rx + 10, ry - 25 + bob, 4, 10); // raised arm
          ctx.fillRect(rx + 11, ry - 28 + bob, 4, 4); // fist
        } else {
          if (frame === 0 || frame === 1) {
            // Left arm back, right arm forward
            ctx.fillRect(rx + 12, ry - 14 + bob, 4, 5);
            ctx.fillRect(rx - 1, ry - 13 + bob, 3, 5);
          } else {
            // Right arm back, left arm forward
            ctx.fillRect(rx - 2, ry - 14 + bob, 4, 5);
            ctx.fillRect(rx + 11, ry - 13 + bob, 3, 5);
          }
        }

        // 4. Head & Face
        ctx.fillStyle = r.skinColor;
        ctx.fillRect(rx + 4, ry - 25 + bob, 8, 8);

        // Hair / Cap
        if (r.hasCap && r.capColor) {
          ctx.fillStyle = r.capColor;
          ctx.fillRect(rx + 3, ry - 28 + bob, 10, 4);
          ctx.fillRect(rx + 8, ry - 25 + bob, 6, 2); // cap visor
        } else {
          ctx.fillStyle = r.hairColor;
          ctx.fillRect(rx + 3, ry - 28 + bob, 9, 4);
          ctx.fillRect(rx + 2, ry - 25 + bob, 3, 4);
        }

        // Headband
        if (r.hasHeadband && r.headbandColor) {
          ctx.fillStyle = r.headbandColor;
          ctx.fillRect(rx + 3, ry - 24 + bob, 10, 2);
        }

        // Sunglasses or Eye
        if (r.hasGlasses) {
          ctx.fillStyle = '#153F35';
          ctx.fillRect(rx + 7, ry - 22 + bob, 5, 2);
        } else {
          ctx.fillStyle = '#153F35';
          ctx.fillRect(rx + 9, ry - 22 + bob, 2, 2); // eye
        }

        // Cheer Bubble popup if cheering!
        if (isCheering) {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(rx + 12, ry - 38 + bob, 16, 12);
          ctx.fillStyle = '#FF6B4A';
          ctx.beginPath();
          ctx.moveTo(rx + 21, ry - 37 + bob);
          ctx.lineTo(rx + 17, ry - 32 + bob);
          ctx.lineTo(rx + 20, ry - 32 + bob);
          ctx.lineTo(rx + 18, ry - 27 + bob);
          ctx.lineTo(rx + 24, ry - 33 + bob);
          ctx.lineTo(rx + 21, ry - 33 + bob);
          ctx.closePath();
          ctx.fill();
        }
      });

      // -------------------------------------------------------------
      // 6. FLOATING NOTES & CONFETTI PARTICLES
      // -------------------------------------------------------------
      // Notes
      for (let i = notesRef.current.length - 1; i >= 0; i--) {
        const n = notesRef.current[i];
        n.x += n.vx;
        n.y += n.vy;
        n.life++;
        n.alpha = Math.max(0, 1 - n.life / 60);

        ctx.fillStyle = n.color;
        ctx.globalAlpha = n.alpha;
        ctx.font = 'bold 12px monospace';
        ctx.fillText(n.char, Math.floor(n.x), Math.floor(n.y));
        ctx.globalAlpha = 1.0;

        if (n.life > 60 || n.y < 30) {
          notesRef.current.splice(i, 1);
        }
      }

      // Confetti
      for (let i = confettiRef.current.length - 1; i >= 0; i--) {
        const c = confettiRef.current[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.08; // gravity
        c.rotation += c.vRot;

        ctx.save();
        ctx.translate(Math.floor(c.x), Math.floor(c.y));
        ctx.rotate((c.rotation * Math.PI) / 180);
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
        ctx.restore();

        if (c.y > 270) {
          confettiRef.current.splice(i, 1);
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isPlaying, isHypeActive, bpm, spawnNote]);

  return (
    <div className="pixel-scene-container" style={{ position: 'relative', width: '100%' }}>
      {/* Canvas Element with Crisp Retro Pixel Rendering */}
      <canvas
        ref={canvasRef}
        width={480}
        height={270}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          imageRendering: 'pixelated',
          borderRadius: '10px',
          boxShadow: 'inset 0 0 0 1px rgba(21, 63, 53, 0.12)'
        }}
        aria-label="Animasi pixel gerak fun run YOUTHON: pelari bergerak beriringan ditemani live performance DJ di panggung festival"
        role="img"
      />

      {/* Retro Interactive Control Overlay Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          padding: '0.625rem 0.875rem',
          backgroundColor: '#153F35',
          borderRadius: '0 0 10px 10px',
          marginTop: '-4px',
          color: '#ffffff',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: isHypeActive ? '#FF6B4A' : '#D7FF3F',
              fontWeight: 700
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: isHypeActive ? '#FF6B4A' : '#D7FF3F',
                boxShadow: isHypeActive ? '0 0 8px #FF6B4A' : '0 0 6px #D7FF3F'
              }}
            ></span>
            <span>{bpm} BPM LIVE RHYTHM</span>
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>|</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Signature: Rhythm Run</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            type="button"
            onClick={triggerHype}
            className="pixel-btn-hype"
            style={{
              padding: '0.3rem 0.75rem',
              backgroundColor: isHypeActive ? '#FF6B4A' : '#D7FF3F',
              color: '#153F35',
              border: 'none',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'transform 0.1s ease'
            }}
            aria-label="Aktifkan Hype Mode: memicu selebrasi, dentuman DJ, dan lari semangat"
          >
            {isHypeActive ? (
              <>
                <IconZap size={13} />
                <span>HYPED!</span>
              </>
            ) : (
              <>
                <IconFlame size={13} />
                <span>Hype Mode</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            style={{
              padding: '0.3rem 0.55rem',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
            aria-label={isPlaying ? 'Jeda animasi' : 'Putar animasi'}
          >
            {isPlaying ? (
              <>
                <IconPause size={10} />
                <span>Jeda</span>
              </>
            ) : (
              <>
                <IconPlay size={10} />
                <span>Putar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
