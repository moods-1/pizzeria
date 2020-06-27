import React from 'react';
import {ProductConsumer} from '../backend/contextAPI';
import {DateFormatter} from '../dateFormatter';

const dater = new DateFormatter();
const dateBox = dater.currentTime();
const {fullMonth, date, hour, minutes, meridiem} = dateBox;
const orderTime = fullMonth + ", " + date + " " + hour + ":" + minutes + " " + meridiem;

const CheckoutPlus = props =>{

    function getConfirmation(){
        if(props.email){
            const initials = props.firstName.slice(0,1) + props.lastName.slice(0,1);
            const confirmation = initials + uniqueNumber();
            return confirmation;
        }
    }
    
    function uniqueNumber(){
        let idNumber= "";
        for(let i=0; i<4; i++){
            idNumber += Math.floor(Math.random() * 10);
        }
        return idNumber
    }
        
    return(
        <ProductConsumer>
            {value=>{
                //let total = value.cartSubtotal;
                
                
                return(
                    <div className="checkout-plus-main">
                        <div className="confirmation-box">
                            <div className="confirmation-header">
                                <div className="shadow-box">
                                    <h1>Pizzeria Moodi</h1>
                                    <h2>Order Confirmation</h2>
                                </div>
                            </div>
                            <div className="confirmation-details-top">
                                <h2>Thank you for doing business with us!</h2>
                                <h3>Confirmation: {getConfirmation()}</h3>
                            </div>
                            <div className="confirmation-details-bottom">
                                <div className="confirmation-bottom-text-box">
                                    <p>Order received: {orderTime}</p><br/>
                                    <p>Your order will be prepared and ready for pick-up in 40 minutes.</p>
                                    <br/>
                                    <h3 style={{textAlign:"center"}}>Order Summary</h3>
                                </div>
                                {value.cart.map(cartData =>{
                                    return(
                                        <div key={cartData.id} className="checkout-summary">
                                            <div>
                                                <img src={cartData.image} alt="pizza"/>
                                            </div>
                                            <div>{cartData.name}</div>
                                            <div>Qty: {cartData.count}</div>
                                            <div>${(cartData.total).toFixed(2)}</div>
                                        </div>
                                        )
                                    })
                                }                               
                                <div className="checkout-total-box">
                                    <div id="checkout-total-price">
                                        <div className="checkout-total-title">Subtotal total :</div>
                                        <div className="checkout-total-money">${(value.cartSubtotal).toFixed(2)}</div>
                                        <div className="checkout-total-title">GST/HST :</div>
                                        <div className="checkout-total-money">${(value.cartSubtotal * .13).toFixed(2)}</div>
                                        <div className="checkout-total-title">Order total :</div>
                                        <div className="checkout-total-money">${(value.cartSubtotal * 1.13).toFixed(2)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }}
        </ProductConsumer>
    )
}
export default CheckoutPlus