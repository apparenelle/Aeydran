import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import './fonts/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// These call components to render twice in dev once in prod --.StrictMode()
root.render(
<React.StrictMode> 
  <App />
</React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



//Configure Routing within Index.js