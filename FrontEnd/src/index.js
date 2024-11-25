import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";

import {GlobalStyles} from './components/elements';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DashboardProvider} from "./context/DashboardContext";
import {ShoppingProvider} from "~/context/ShoppingContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <GlobalStyles>
          <Router>
              <ShoppingProvider>
                  <DashboardProvider>
                      <App />
                  </DashboardProvider>
              </ShoppingProvider>
          </Router>
      </GlobalStyles>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
