import React from 'react'

const CartTotal = ({cartSubtotal}) => {
    return (     
        <div className="cart-total-box">
            <div className="cart-total-price">
                <div className="total-title">Subtotal total :</div>
                <div className="total-money">${(cartSubtotal).toFixed(2)}</div>
                <div className="total-title">GST/HST :</div>
                <div className="total-money">${(cartSubtotal * .13).toFixed(2)}</div>
                <div className="total-title">Order total :</div>
                <div className="total-money">${(cartSubtotal * 1.13).toFixed(2)}</div>
            </div>
        </div>       
     );
}
export default CartTotal;