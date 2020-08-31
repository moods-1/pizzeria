import React from 'react'
import {Link} from 'react-router-dom';

const CheckoutButton = () => {
    return (  
        <div className="checkOut">
            <Link to="/checkout">
                <button
                    id="checkout-button">Checkout
                </button>
            </Link>
        </div>    
    );
}
export default CheckoutButton;