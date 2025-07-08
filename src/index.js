import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ChangeName from './ChangeName';
import Main from './props/Main';
import App1 from './navigate/App1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />  */}
    {/* < ChangeName />  */}
    {/* <Main /> */}
    <App1 />
   
  </React.StrictMode>
);

