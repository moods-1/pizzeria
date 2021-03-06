import React from 'react'

const CartTotal = ({totals}) => {
    return (     
        <div className="cart-total-box">
            <div id="cart-total-price">
                <div className="total-title">Subtotal total :</div>
                <div className="total-money">${(totals.cartSubtotal).toFixed(2)}</div>
                <div className="total-title">GST/HST :</div>
                <div className="total-money">${(totals.cartSubtotal * .13).toFixed(2)}</div>
                <div className="total-title">Order total :</div>
                <div className="total-money">${(totals.cartSubtotal * 1.13).toFixed(2)}</div>
            </div>
        </div>       
     );
}
export default CartTotal;