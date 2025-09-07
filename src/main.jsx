import React from 'react';
import { createRoot } from 'react-dom/client';
import ContextProvider from './Context/context';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
