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




//Configure Routing within Index.js