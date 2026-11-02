import React, { useState, useEffect, useRef } from 'react';
import { IconLock, IconUnlock, IconShield, IconEye, IconEyeOff, IconKey } from './Icons';

interface PinProtectionGateProps {
  children: React.ReactNode;
}

const STORAGE_SESSION_KEY = 'youthon_site_unlocked_session';
const STORAGE_LOCAL_KEY = 'youthon_site_unlocked_persisted';

export const PinProtectionGate: React.FC<PinProtectionGateProps> = ({ children }) => {
  // Read expected PIN from Vite environment variable with safe fallback
  const expectedPin = (import.meta.env.VITE_ACCESS_PIN || '2026').trim();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Check session or local storage on initial mount
    const fromSession = sessionStorage.getItem(STORAGE_SESSION_KEY) === 'true';
    const fromLocal = localStorage.getItem(STORAGE_LOCAL_KEY) === 'true';
    return fromSession || fromLocal;
  });

  const [pinInput, setPinInput] = useState<string>('');
  const [showPinText, setShowPinText] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [isSuccessUnlocking, setIsSuccessUnlocking] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus input when not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      inputRef.current?.focus();
    }
  }, [isAuthenticated]);

  // Global physical keyboard capture
  useEffect(() => {
    if (isAuthenticated) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't interfere if special modifiers are held
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        handleDigitPress(e.key);
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmitPin();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleClear();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthenticated, pinInput, rememberMe, expectedPin]);

  const handleDigitPress = (digit: string) => {
    if (pinInput.length >= 10) return;
    setErrorMessage(null);
    setPinInput((prev) => prev + digit);
  };

  const handleBackspace = () => {
    setErrorMessage(null);
    setPinInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setErrorMessage(null);
    setPinInput('');
  };

  const handleSubmitPin = () => {
    if (!pinInput) {
      setErrorMessage('Silakan masukkan PIN akses terlebih dahulu');
      triggerShake();
      return;
    }

    if (pinInput.trim() === expectedPin) {
      // PIN is correct!
      setErrorMessage(null);
      setIsSuccessUnlocking(true);

      setTimeout(() => {
        sessionStorage.setItem(STORAGE_SESSION_KEY, 'true');
        if (rememberMe) {
          localStorage.setItem(STORAGE_LOCAL_KEY, 'true');
        } else {
          localStorage.removeItem(STORAGE_LOCAL_KEY);
        }
        setIsAuthenticated(true);
        setIsSuccessUnlocking(false);
      }, 500);
    } else {
      // Incorrect PIN
      setErrorMessage('PIN akses salah. Periksa kembali kode Anda.');
      triggerShake();
      setPinInput('');
      inputRef.current?.focus();
    }
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 550);
  };

  const handleLockWebsite = () => {
    sessionStorage.removeItem(STORAGE_SESSION_KEY);
    localStorage.removeItem(STORAGE_LOCAL_KEY);
    setPinInput('');
    setErrorMessage(null);
    setIsAuthenticated(false);
  };

  // If already authenticated, show the website with a discreet lock control
  if (isAuthenticated) {
    return (
      <>
        {children}

        {/* Discreet Floating Security Lock Button (Bottom-Left) */}
        <button
          type="button"
          onClick={handleLockWebsite}
          className="btn-floating-lock"
          title="Kunci Akses Dokumen Website"
          aria-label="Kunci Akses Dokumen Website (Lock)"
        >
          <IconLock size={14} />
          <span className="floating-lock-text">Kunci Web</span>
        </button>
      </>
    );
  }

  // Desired indicator slots count based on expectedPin length
  const slotCount = Math.max(4, Math.min(expectedPin.length, 6));

  return (
    <div className="pin-gate-overlay">
      <div className="pin-gate-backdrop" />

      {/* Security Card */}
      <div className={`pin-gate-card ${isShaking ? 'shake-animation' : ''} ${isSuccessUnlocking ? 'unlock-success-glow' : ''}`}>
        <span className="corner-crosshair top-left" aria-hidden="true">+</span>
        <span className="corner-crosshair top-right" aria-hidden="true">+</span>
        <span className="corner-crosshair bottom-left" aria-hidden="true">+</span>
        <span className="corner-crosshair bottom-right" aria-hidden="true">+</span>

        {/* Card Header & Brand Identifier */}
        <div className="pin-gate-header">
          <div className="pin-status-pill">
            <span className="status-dot-pulse" aria-hidden="true" />
            <span>CONFIDENTIAL // RESTRICTED ACCESS</span>
          </div>

          <div className="pin-lock-avatar-wrap">
            <div className={`pin-lock-avatar ${isSuccessUnlocking ? 'avatar-unlock' : ''}`}>
              {isSuccessUnlocking ? <IconUnlock size={26} /> : <IconShield size={26} />}
            </div>
          </div>

          <div className="pin-brand-label">
            <span className="pin-brand-badge">Y</span>
            <span className="pin-brand-name">YOUTHON</span>
          </div>

          <h1 className="pin-gate-title">Pitch Deck Protected</h1>
          <p className="pin-gate-desc">
            Dokumen konsep strategis inisiasi Fun Run Movement Jawa Barat ini dilindungi PIN otorisasi internal.
          </p>
        </div>

        {/* Hidden Form for accessibility and autocomplete */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitPin();
          }}
          className="pin-gate-form"
        >
          <input
            ref={inputRef}
            type="password"
            inputMode="numeric"
            autoComplete="current-password"
            value={pinInput}
            onChange={(e) => {
              setErrorMessage(null);
              setPinInput(e.target.value);
            }}
            className="pin-hidden-input"
            aria-label="Input PIN Akses"
            tabIndex={-1}
          />

          {/* Visual PIN Slot Indicators */}
          <div className="pin-slots-container" onClick={() => inputRef.current?.focus()}>
            {Array.from({ length: slotCount }).map((_, index) => {
              const char = pinInput[index];
              const isFilled = Boolean(char);
              const isActive = index === pinInput.length;

              return (
                <div
                  key={index}
                  className={`pin-slot ${isFilled ? 'filled' : ''} ${isActive ? 'active' : ''}`}
                >
                  {isFilled ? (
                    showPinText ? (
                      <span className="pin-slot-char">{char}</span>
                    ) : (
                      <span className="pin-slot-dot" />
                    )
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* Show / Hide Toggle & Clear */}
          <div className="pin-input-tools">
            <button
              type="button"
              onClick={() => setShowPinText((prev) => !prev)}
              className="pin-tool-btn"
              title={showPinText ? 'Sembunyikan PIN' : 'Tampilkan PIN'}
              aria-label={showPinText ? 'Sembunyikan PIN' : 'Tampilkan PIN'}
            >
              {showPinText ? <IconEyeOff size={14} /> : <IconEye size={14} />}
              <span>{showPinText ? 'Sembunyikan' : 'Lihat Angka'}</span>
            </button>

            {pinInput.length > 0 && (
              <button
                type="button"
                onClick={handleClear}
                className="pin-tool-btn"
                title="Hapus Semua"
                aria-label="Hapus input PIN"
              >
                <span>Hapus (C)</span>
              </button>
            )}
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="pin-error-alert" role="alert">
              <span className="pin-error-dot" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* On-Screen Touch Keypad */}
          <div className="pin-keypad-grid" aria-label="Keypad PIN">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
              <button
                key={digit}
                type="button"
                onClick={() => handleDigitPress(digit)}
                className="pin-key-btn"
                aria-label={`Digit ${digit}`}
              >
                {digit}
              </button>
            ))}

            <button
              type="button"
              onClick={handleClear}
              className="pin-key-btn pin-key-action"
              aria-label="Clear PIN"
            >
              C
            </button>

            <button
              type="button"
              onClick={() => handleDigitPress('0')}
              className="pin-key-btn"
              aria-label="Digit 0"
            >
              0
            </button>

            <button
              type="button"
              onClick={handleBackspace}
              className="pin-key-btn pin-key-action"
              aria-label="Backspace"
            >
              &larr;
            </button>
          </div>

          {/* Remember Me Checkbox */}
          <label className="pin-remember-label">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="pin-checkbox"
            />
            <span>Ingat akses di perangkat ini</span>
          </label>

          {/* Submit Action Button */}
          <button
            type="submit"
            className="btn-editorial btn-lime pin-submit-btn"
            disabled={isSuccessUnlocking}
          >
            {isSuccessUnlocking ? (
              <>
                <IconUnlock size={16} />
                <span>Membuka Dokumen...</span>
              </>
            ) : (
              <>
                <IconKey size={16} />
                <span>Buka Akses Pitch Deck</span>
              </>
            )}
          </button>
        </form>

        {/* Card Footer Note */}
        <div className="pin-gate-footer">
          <p className="pin-footer-text">
            Perlu PIN otorisasi? Hubungi tim koordinator inisiasi YOUTHON.
          </p>
          <span className="pin-footer-env-hint">
            Env Key: <code>VITE_ACCESS_PIN</code>
          </span>
        </div>
      </div>
    </div>
  );
};
