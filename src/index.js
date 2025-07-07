import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ChangeName from './ChangeName';
import Main from './props/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />  */}
    {/* < ChangeName />  */}
    <Main />
   
  </React.StrictMode>
);

