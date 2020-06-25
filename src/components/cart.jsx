import React, { Component } from 'react';
import {ProductConsumer} from '../backend/contextAPI';
import '../styles/menuCart.css';
import {Link} from 'react-router-dom';

export default class Cart extends Component{
        
    render(){
        
        return(
            <section>
                <ProductConsumer>
                    {value=>{
                        if(value.cart.length){
                            return(
                                <div className="main-cart-container">
                                    <div>
                                        <h1 style={{textAlign:"center"}}>Your Cart</h1>
                                    </div>
                                    <div className="cart-column-title-box">
                                        <div className="horizontal-flex">
                                            <div className="cart-column">Pizza</div>
                                            <div className="cart-column">Name</div>
                                            <div className="cart-column">Price</div>
                                            <div className="cart-column">Quantity</div>
                                            <div className="cart-column">Remove</div>
                                            <div className="cart-column">Total</div>
                                        </div> 
                                        <hr/>                                   
                                    </div>
                                    {value.cart.map(cartData =>{
                                        return(
                                            <div key={cartData.id}>
                                                <hr/>
                                                <div className="horizontal-flex" >
                                                    <div className="cart-column" id="cart-image-box">
                                                        <img src={cartData.image} alt="pizza" />
                                                    </div>
                                                    <div className="cart-column" id="cart-pizza-name">
                                                        {cartData.name}
                                                    </div>
                                                    <div className="cart-column" id="cart-pizza-price">
                                                        <div className="small-none">Price: &nbsp;</div>${cartData.price}
                                                    </div>
                                                    <div className="cart-column" id="cart-pizza-quantity">
                                                    <div className="small-none">Qty: &nbsp;</div>
                                                        <input 
                                                            value="-" 
                                                            className="qtyMinus"
                                                            readOnly 
                                                            onClick={()=>{value.decrement(cartData.id)}} />
                                                        <span id="cart-qty">{cartData.count}</span>
                                                        <input 
                                                            value="+" 
                                                            className="qtyPlus"
                                                            readOnly
                                                            onClick={()=>{value.increment(cartData.id)}} />
                                                    </div>
                                                    <div className="cart-column" id="cart-remove-box">
                                                        <button 
                                                            id="cart-remove-button"
                                                            variant="secondary" 
                                                            onClick={()=>{value.removeItem(cartData.id)}}>
                                                            Remove
                                                        </button>
                                                    </div>
                                                    <div className="cart-column" id="cart-pie-total">
                                                    <div className="small-none">Total: &nbsp;</div>${cartData.total}
                                                    </div>
                                                </div>
                                            </div>                                                                                   
                                        )
                                    })}
                                    <hr></hr>
                                    <div className="cart-total-box">
                                        <div id="cart-total-price">
                                            <div className="total-title">Subtotal total :</div>
                                            <div className="total-money">${(value.cartSubtotal).toFixed(2)}</div>
                                            <div className="total-title">Taxes :</div>
                                            <div className="total-money">${(value.cartSubtotal * .13).toFixed(2)}</div>
                                            <div className="total-title">Order total :</div>
                                            <div className="total-money">${(value.cartSubtotal * 1.13).toFixed(2)}</div>
                                        </div>
                                    </div>
                                    <div className="checkOut">
                                        <Link to="/checkout">
                                            <button
                                                id="checkout-button">Checkout
                                            </button>
                                        </Link>
                                    </div>                                         
                                </div>                                
                            )  
                        }else{
                            return(
                                <div>
                                    <h1 style={{color:"white",textAlign:"center"}}>
                                        Currently your cart is 
                                        <span> Empty</span>
                                    </h1>
                                </div>
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}