import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const MYNOTES = [
  {text:'React is cool', rotate:  Math.floor(Math.random() * 4)},
  {text:'radius = 100mm', rotate:  Math.floor(Math.random() * 4)},
  {text:"rebeccapurple color", rotate:  Math.floor(Math.random() * 4)}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App myNotes={MYNOTES} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
