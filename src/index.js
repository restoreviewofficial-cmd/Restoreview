import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import HomePage from './homepage';
import reportWebVitals from './reportWebVitals';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
