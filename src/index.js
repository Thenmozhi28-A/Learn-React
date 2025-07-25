import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ChangeName from './ChangeName';
import Main from './props/Main';
import App1 from './navigate/App1';
import App2 from './usecontext/App2';
import Form from './form/Form';
import App3 from './apicall/App3';
import PostExample from './apicall/PostExample'
import PutExample from './apicall/PutExample';
import DeleteExample from './apicall/DeleteExample';
import PatchExample from './apicall/PatchExample';
import App4 from './get/App4'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />  */}
    {/* < ChangeName />  */}
    {/* <Main />  */}
    {/* <App1 /> */}
    {/* <App2 /> */}
    {/* <Form/> */}
    {/* <App3 /> */}
    {/* <PostExample/> */}
    {/* <PutExample /> */}
    {/* <DeleteExample/> */}
    {/* <PatchExample />  */}
    <App4/>
   
  </React.StrictMode>
);

