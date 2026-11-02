import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { PinProtectionGate } from './components/PinProtectionGate';
import './styles/editorial.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <PinProtectionGate>
        <App />
      </PinProtectionGate>
    </StrictMode>
  );
}
