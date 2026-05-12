import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';
import './global.css';
import "@xyflow/react/dist/style.css";

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
