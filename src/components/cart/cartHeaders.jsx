import React from 'react'

const CartHeaders = () => {
    return ( 
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
     );
} 
export default CartHeaders;