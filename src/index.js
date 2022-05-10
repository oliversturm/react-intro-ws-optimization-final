import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Normally it's a good idea to use StrictMode because it helps
// detect rendering issues in development. However, for this demo
// we're deactivating it because in dev mode it causes additional
// render cycles that muddy the waters for the purpose of this demo.

root.render(
  // <StrictMode>
  <App />,
  // </StrictMode>,
);
