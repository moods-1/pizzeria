import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import burger from "../../images/burger.png";
import fries from "../../images/fries.png";
import cart from "../../images/cart.png";
import { ProductConsumer } from "../../backend/contextAPI";
import { headerLinks } from "../../helpers/constants";
import "./Header.scss";
import $ from "jquery";

function Header() {
  const [burgerTracker, setBurgerTracker] = useState(true);
  const [linkId, setLinkId] = useState(0);
  const burgerSource = burgerTracker ? burger : fries;
  
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

  const handleLink = (e) => {
    $(".nav-list-item").each(function () {
      $(this).css({ animation: "" });
    });
    $(".nav-list").toggleClass("nav-shift");
    setBurgerTracker(!burgerTracker);
  };

  const handleCartClick = () => {
    $(".nav-list").removeClass("nav-shift");
    setLinkId("")
    setBurgerTracker(true);
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

  return (
    <header>
      <h1>Pizzeria Moodi</h1>
      <div className="top-nav">
        <nav className="horizontal-nav">
          <ul className="nav-list" onClick={(e) => handleLink(e)}>
            {headerLinks.map(({ id, title, route }) => (
              <Link to={route} key={id} onClick={()=> setLinkId(id)} style={{ textDecoration: "none" }}>
                <li className={`nav-list-item ${linkId === id? "active":""}`}>{title}</li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className="burger-box d-none" onClick={burgerToggle}>
          <img src={burgerSource} alt="burger" />
        </div>
        <ul>
          <ProductConsumer>
            {(value) => {
              return (
                <div className="cart" onClick={handleCartClick}>
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
