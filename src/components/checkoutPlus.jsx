import React from 'react';
import {ProductConsumer} from '../backend/contextAPI';

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
                let total = value.cartSubtotal;
                return(
                    <div className="checkout-plus-main">
                        <div className="confirmation-box">
                            <div className="confirmation-header">
                                <h1>Pizzeria Moodi</h1>
                                <h2>Order Confirmation</h2>
                            </div>
                            <div className="confirmation-details-top">
                                <h3>Thank you for doing business with us!</h3>
                                <h4>Confirmation: {getConfirmation()}</h4>
                            <div className="confirmation-details-bottom"></div>
                                <h1>{total}</h1>
                            </div>
                        </div>
                    </div>
                )
        }}
        </ProductConsumer>
    )
}
export default CheckoutPlus