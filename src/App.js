import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Checkout from "./components/Checkout/Checkout";
import Confirmation from "./components/Confirmation/Confirmation";
import Error404 from "./components/Error404/Error404";
import Pay from "./components/Pay/Pay";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
        <Route component={Error404} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
