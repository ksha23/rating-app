import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RatingsContextProvider} from "./context/RatingsContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RatingsContextProvider>
      <App />
    </RatingsContextProvider>
  </React.StrictMode>
);

