import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import burger from "../../images/burger.png";
import fries from "../../images/fries.png";
import cart from "../../images/cart.png";
import { ProductConsumer } from "../../backend/contextAPI";
import "./Header.scss";
import $ from "jquery";

function Header() {
  const [burgerTracker, setBurgerTracker] = useState(true);

  const burgerToggle = () => {
    $(".nav-list").toggleClass("nav-shift");
    $(".nav-list li").each(function (index) {
      if ($(this).parents().hasClass("nav-shift")) {
        $(this).css({
          animation: `navEaseIn 0.5s ease forwards ${index / 7 + 0.5}s`,
        });
      } else {
        $(this).css({ animation: "" });
      }
    });
    setBurgerTracker(!burgerTracker);
  };

  const handleLink = () => {
    setBurgerTracker(!burgerTracker);
    $(".nav-list").toggleClass("nav-shift");
    $(".nav-list li").each(function (index) {
      $(this).css({ animation: "" });
    });
  };
  useEffect(() => {
    const burgerBox = $(".burger-box")[0];
    window.innerWidth <= 767 && burgerBox.classList.remove("d-none");
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 767) burgerBox.classList.remove("d-none");
      else {
        burgerBox.classList.add("d-none");
        setBurgerTracker(true);
        $(".nav-list").removeClass("nav-shift");
      }
    });
  });

  const burgerSource = burgerTracker ? burger : fries;

  return (
    <header>
      <h1>Pizzeria Moodi</h1>
      <div className="top-nav">
        <nav className="horizontal-nav">
          <ul className="nav-list" onClick={handleLink}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="nav-list-item">Home</li>
            </Link>
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <li className="nav-list-item">Menu</li>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li className="nav-list-item">About</li>
            </Link>
          </ul>
        </nav>
        <div className="burger-box d-none" onClick={burgerToggle}>
          <img src={burgerSource} alt="burger" />
        </div>
        <ul>
          <ProductConsumer>
            {(value) => {
              return (
                <div className="cart">
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <li>
                      <img src={cart} alt="cart" />
                    </li>
                    <div
                      className="cart-value"
                      style={{ color: "white", fontWeight: "bold" }}
                    >
                      {value.cart.length}
                    </div>
                  </Link>
                </div>
              );
            }}
          </ProductConsumer>
        </ul>
      </div>
    </header>
  );
}
export default Header;
