import React from "react";
import { useStateContext } from "../../backend/contextAPI";
import "./Menu.scss";

const Menu = () => {
  const { products, addToCart } = useStateContext();

  return (
    <div className="menu-main-container">
      <div>
        <h1 id="menu-title">Pizzas</h1>
      </div>
      <div className="menu-pizzas-box">
        {products.map((product) => (
          <div key={product.id} className="menu-box" id="menu-box1">
            <h3>{product.name}</h3>
            <img src={product.image} alt="pie" />
            <div className="description-box">
              <p>{product.description}</p>
              <div className="serving-price">
                <p>
                  <strong>Serves:</strong>
                  <span> {product.serves}</span>
                </p>
                <p>
                  <strong>Price:</strong>
                  <span> ${product.price}</span>
                </p>
              </div>
            </div>
            <div>
              <button
                id="cart-button"
                onClick={() => {
                  addToCart(product.id);
                }}
                disabled={product.inCart}
              >
                {product.inCart ? "In Cart" : "Add to cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menu;
