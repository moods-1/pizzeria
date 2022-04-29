import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import burger from "../../images/burger.png";
import fries from "../../images/fries.png";
import cart from "../../images/cart.png";
import { useStateContext } from "../../backend/contextAPI";
import { headerLinks, headerObject } from "../../helpers/constants";
import "./Header.scss";
import $ from "jquery";

function Header() {
  const [burgerTracker, setBurgerTracker] = useState(true);
  const history = useHistory();
  const burgerSource = burgerTracker ? burger : fries;
  const {
    cart: cartItems,
    addLinkId,
    linkId,
    removeLinkId,
  } = useStateContext();

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
    removeLinkId();
    setBurgerTracker(true);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 767) {
        setBurgerTracker(true);
        $(".nav-list").removeClass("nav-shift");
        $(".nav-list li").each(function () {
          $(this).css({ animation: "" });
        });
      }
    });
    return () => window.removeEventListener("resize", () => {});
  });

  const handlePath = useCallback(
    (path) => {
      return addLinkId(path in headerObject ? headerObject[path] : null);
    },
    [addLinkId]
  );

  // Account for browser navigation buttons
  useEffect(() => {
    return history.listen((location) => {
      let path = location.pathname;
      handlePath(path);
    });
  }, [addLinkId, history, handlePath]);

  // Account for browser refresh
  useEffect(() => {
    let path = window.location.pathname;
    handlePath(path);
  });

  return (
    <header>
      <div className="header-brand"><Link to="/"><h1>Pizzeria Moodi</h1></Link></div>
      <div className="top-nav">
        <nav className="horizontal-nav">
          <ul className="nav-list" onClick={(e) => handleLink(e)}>
            {headerLinks.map(({ id, title, route }) => (
              <Link
                to={route}
                key={id}
                onClick={() => addLinkId(id)}
                style={{ textDecoration: "none" }}
              >
                <li
                  className={`nav-list-item ${linkId === id ? "active" : ""}`}
                >
                  {title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className="burger-box" onClick={burgerToggle}>
          <img src={burgerSource} alt="burger" />
        </div>
        <ul>
          <div className="cart" onClick={handleCartClick}>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <li>
                <img src={cart} alt="cart" />
              </li>
              <div
                className="cart-value"
                style={{ color: "white", fontWeight: "bold" }}
              >
                {cartItems.length}
              </div>
            </Link>
          </div>
        </ul>
      </div>
    </header>
  );
}
export default Header;
