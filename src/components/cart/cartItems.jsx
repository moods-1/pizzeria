import React from "react";

const CartItems = ({ items }) => {
  return items.cart.map((cartData) => (
    <div key={cartData.id}>
      <div className="horizontal-flex cart-row">
        <div className="cart-column" id="cart-image-box">
          <img src={cartData.image} alt="pizza" />
        </div>
        <div className="cart-column" id="cart-pizza-name">
          {cartData.name}
        </div>
        <div className="cart-column" id="cart-pizza-price">
          <div className="hide-mobile d-none">Price: &nbsp;</div>$
          {cartData.price}
        </div>
        <div className="cart-column" id="cart-pizza-quantity">
          <div className="hide-mobile d-none">Qty: &nbsp;</div>
          <button
            className="cart-adjustor"
            onClick={() => {
              items.decrement(cartData.id);
            }}
          >
            -
          </button>
          <span id="cart-qty">{cartData.count}</span>
          <button
            className="cart-adjustor"
            onClick={() => {
              items.increment(cartData.id);
            }}
          >
            +
          </button>
        </div>
        <div className="cart-column" id="cart-remove-box">
          <i
            className="fa fa-trash cart-remove-icon"
            aria-hidden="true"
            onClick={() => {
              items.removeItem(cartData.id);
            }}
          />
        </div>
        <div className="cart-column" id="cart-pie-total">
          <div className="hide-mobile d-none">Total: &nbsp;</div>$
          {cartData.total}
        </div>
      </div>
      <hr className="cart-hr" />
    </div>
  ));
};

export default CartItems;
