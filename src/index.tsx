import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IconContext } from '@phosphor-icons/react/dist/lib/context';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <IconContext.Provider
          value={{
            size: 32,
            weight: "fill",
            mirrored: false,
          }}
        >
    <App />
    </IconContext.Provider>
  </React.StrictMode>
);