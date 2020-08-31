import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {ProductProvider} from './backend/contextAPI';

ReactDOM.render(
  <ProductProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ProductProvider>,
  document.getElementById('root')
);