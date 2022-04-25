import React, { useEffect } from "react";
import { useStateContext } from "../../backend/contextAPI";
import CartHeaders from "./CartHeaders";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import CheckoutButton from "./CheckoutButton";
import "./Cart.scss";

const Cart = () => {
  const { cart, cartSubtotal } = useStateContext();

  useEffect(() => {
    const hideMobile = Array.from(
      document.getElementsByClassName("hide-mobile")
    );
    if (hideMobile) {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 768)
          hideMobile.forEach((item) => item.classList.remove("d-none"));
        else hideMobile.forEach((item) => item.classList.add("d-none"));
      });
    }
    if (hideMobile) {
      if (window.innerWidth < 768)
        hideMobile.forEach((item) => item.classList.remove("d-none"));
      else hideMobile.forEach((item) => item.classList.add("d-none"));
    }
  }, []);

  return (
    <>
      {cart.length ? (
        <div className="main-cart-container">
          <div>
            <h1 id="cart-H1">Your Cart</h1>
          </div>
          <CartHeaders />
          <CartItems />
          <CartTotal cartSubtotal={cartSubtotal} />
          <CheckoutButton />
        </div>
      ) : (
        <div className="empty-cart">
          <h1 style={{ color: "white", textAlign: "center" }}>
            Currently your cart is empty.
          </h1>
        </div>
      )}
    </>
  );
};
export default Cart;
