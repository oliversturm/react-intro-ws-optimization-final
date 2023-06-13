// import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Normally it's a good idea to use StrictMode because it helps
// detect rendering issues in development. However, for this demo
// we're deactivating it because in dev mode it causes additional
// render cycles that muddy the waters for the purpose of this demo.

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
  <App />
  //  </React.StrictMode>,
);
