import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Standings from './components/standingsTable';

// use this in package.json if you want to test ES6 modules with jest instead of React test
//    "test": "NODE_OPTIONS=--experimental-vm-modules npx jest",

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/* ReactDOM.render(
  <React.StrictMode>
    <Standings />
  </React.StrictMode>,
  document.getElementById('SC_standings')
) */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
