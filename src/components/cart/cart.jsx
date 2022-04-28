import React from "react";
import { useStateContext } from "../../backend/contextAPI";
import CartHeaders from "./CartHeaders";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import CheckoutButton from "./CheckoutButton";
import "./Cart.scss";

const Cart = () => {
  const { cart, cartSubtotal } = useStateContext();

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
            Currently, your cart is empty.
          </h1>
        </div>
      )}
    </>
  );
};
export default Cart;
