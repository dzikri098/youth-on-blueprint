import React from 'react';

export const KineticTickerBanner: React.FC = () => {
  const tickerItems = [
    'YOUTHON : SWITCH YOUR ENERGY ON',
    'CHAPTER 01: WEST JAVA',
    '3K & 5K FUN RUN MOVEMENT',
    'RUN · CONNECT · CELEBRATE',
    '2.000 - 3.000 PELARI AWAL',
    'NON-KOMPETITIF & INKLUSIF',
    'RHYTHM RUN & LIVE DJ PERFORMANCE',
    'LIFESTYLE, MUSIK & KOMUNITAS',
    'MORE YOUTH · MORE MOVEMENT'
  ];

  return (
    <div className="kinetic-ticker-wrapper" aria-hidden="true">
      <div className="kinetic-ticker-marquee">
        {tickerItems.concat(tickerItems).map((item, idx) => (
          <div key={idx} className="kinetic-ticker-item">
            <span className="kinetic-ticker-badge">ON</span>
            <span className="kinetic-ticker-text">{item}</span>
            <span className="kinetic-ticker-sep">///</span>
          </div>
        ))}
      </div>
    </div>
  );
};

