import React from 'react';
import './styles/main.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';
import Footer from './components/footer';
import Menu from './components/menu';
import Checkout from './components/checkout';

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
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
