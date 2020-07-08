import React from 'react';
import './styles/main.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';
import Footer from './components/footer';
import Menu from './components/menu';
import Checkout from './components/checkout';
import Confirmation from './components/confirmation';
import Pay from './components/pay';
import {BrowserRouter as Router, Route} from 'react-router-dom';


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
        <Route path="/pay" component={Pay} />
        <Route path="/confirmation" component={Confirmation} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
