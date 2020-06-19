import React from 'react';
import './styles/main.css';
import Header from './components/header';
import Home from './components/home';
import Menu from './components/menu';
import About from './components/about';
import Login from './components/login';
import Footer from './components/footer'
// eslint-disable-next-line
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
