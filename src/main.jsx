import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App2.jsx'; // ✅ This must match your file name and export


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);
