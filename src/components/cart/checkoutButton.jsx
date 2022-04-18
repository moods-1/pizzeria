import React from "react";
import { Link } from "react-router-dom";

const CheckoutButton = () => {
  return (
    <Link to="/checkout">
      <button id="checkout-button">Checkout</button>
    </Link>
  );
};
export default CheckoutButton;
