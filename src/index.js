import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
      <App /> 
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
