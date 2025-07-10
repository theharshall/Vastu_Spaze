import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import LocomotiveProvider from './components/LocomotiveProvider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocomotiveProvider>
      <App />
    </LocomotiveProvider>
  </StrictMode>,
);
