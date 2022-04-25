import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {StateContext} from './backend/contextAPI';

ReactDOM.render(
  <StateContext>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </StateContext>,
  document.getElementById('root')
);