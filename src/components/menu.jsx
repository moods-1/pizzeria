import React from 'react';
import {ProductConsumer} from '../backend/contextAPI';
import '../styles/menuCart.css';


const Menu =()=>{
    
        return(
            <div className="menu-main-container">
                <div>
                    <h1 id="menu-title">Pizzas</h1>
                </div>
                <ProductConsumer>
                    {value=>{
                        return value.products.map(product =>
                            <div key={product.id} className="menu-box" id="menu-box1">
                                <div className="pizza-box">
                                    <img src={product.image} alt="pie"/>
                                </div>
                                <div className="description-box">
                                    <div className="description-box-title">
                                        <h1 id="pizza-title">{product.name}</h1>
                                    </div>
                                    <p id="ingredients">{product.description}</p>
                                    <div className="serving-price">
                                    <p id="serves"><strong>Serves: {product.serves}</strong></p>
                                        <p>
                                            <strong>Price: $
                                            <span id="menu-price">{product.price}
                                            </span>
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="cart-box">
                                    <button 
                                        id="cart-button" 
                                        onClick={()=>{value.addToCart(product.id)}}
                                        disabled={product.inCart}>
                                        {product.inCart? "In Cart":"Add to cart"}
                                    </button>
                                </div>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </div>
        )
    }
export default Menu
