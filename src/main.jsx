import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './App1.jsx'; // ✅ This must match your file name and export


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);
