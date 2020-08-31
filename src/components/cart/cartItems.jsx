import React from 'react'

const CartItems = ({items}) => {
    
    return (      
        items.cart.map(cartData=>    
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
                        <div className="hide-mobile d-none">Price: &nbsp;</div>${cartData.price}
                    </div>
                    <div className="cart-column" id="cart-pizza-quantity">
                        <div className="hide-mobile d-none">Qty: &nbsp;</div>
                            <input 
                                value="-" 
                                className="qtyMinus"
                                readOnly 
                                onClick={()=>{items.decrement(cartData.id)}} />
                            <span id="cart-qty">{cartData.count}</span>
                            <input 
                                value="+" 
                                className="qtyPlus"
                                readOnly
                                onClick={()=>{items.increment(cartData.id)}} />
                    </div>
                    <div className="cart-column" id="cart-remove-box">
                        <button 
                            id="cart-remove-button"
                            variant="secondary" 
                            onClick={()=>{items.removeItem(cartData.id)}}>
                            Remove
                        </button>
                    </div>
                    <div className="cart-column" id="cart-pie-total">
                        <div className="hide-mobile d-none">Total: &nbsp;</div>${cartData.total}
                    </div>
                </div>
            </div>
        )
    )        
}
 
export default CartItems;