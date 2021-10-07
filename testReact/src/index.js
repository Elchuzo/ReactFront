import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain='dev-xb-41-zo.us.auth0.com'
    clientId='FEt55wuGW2GAbraPCDjUIClrkWvPw6s9'
    redirectUri={window.location.origin}
    audience='myAPI'
    scope='openid profile email'
    >
    <App />
    </Auth0Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
