import './index.css';
import App from './App.jsx';
import "./Style/global.css";
import "./Style/variables.css";
import "./Style/responsive.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
