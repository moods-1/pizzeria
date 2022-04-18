import React,{Component} from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import {ProductConsumer} from "../../backend/contextAPI";
import Confirmation from '../Confirmation/Confirmation';
import "./Pay.scss";

export default class Pay extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          showButtons: true,
          paid: false,
          emptyCart: true,
          paymentDetails: []
        };
    }
     
    onApprove = (data, actions) => {
         actions.order.capture().then(details => {
           const paymentData = {
             payerID: data.payerID,
             orderID: data.orderID
           };
           this.setState({ 
               showButtons: false, 
               paid: true,
               paymentDetails: paymentData 
            });
        });
    };
    
    render() {
        const { showButtons, paid} = this.state;
    return (
        <ProductConsumer>{
            value=>{
                return(
                    <div className="payment-main-container">
                        <div className="payment-details-container">                    
                        {showButtons && (
                            <div style={{position:"relative"}}>
                                <div className="payment-title-box">
                                    <div className="payment-shadow-box">
                                            <h1 id="payment-title">Purchase Details</h1>
                                    </div>
                                </div>
                                {value.cart.map(cartData =>
                                    {
                                    return(
                                        <div key={cartData.id} className="payment-summary">
                                            <div id="payment-summary-img">
                                                <img src={cartData.image} alt="pizza"/>
                                            </div>
                                            <div id="payment-summary-subject">{cartData.name}</div>
                                            <div id="payment-summary-qty">Qty: {cartData.count}</div>
                                            <div id="payment-summary-total">${(cartData.total).toFixed(2)}</div>
                                        </div>
                                        )
                                    })
                                } 
                                <div className="payment-total-box">
                                    <div id="payment-total-price">
                                        <div className="payment-total-title">Subtotal total :</div>
                                        <div className="payment-total-money">${(value.cartSubtotal).toFixed(2)}</div>
                                        <div className="payment-total-title">GST/HST :</div>
                                        <div className="payment-total-money">${(value.cartSubtotal * .13).toFixed(2)}</div>
                                        <div className="payment-total-title">Order total :</div>
                                        <div className="payment-total-money">${(value.cartSubtotal * 1.13).toFixed(2)}</div>
                                    </div>
                                </div>                                       
                                <div className="payInfo">
                                    <p>Use the following credentials:</p>
                                    <p>email: me@test.ca</p>
                                    <p>password: Pizzeria1</p>
                                </div>
                                <div className="payPal-buttons-box">
                                    <PayPalButton
                                        amount={(value.cartSubtotal * 1.13).toFixed(2)}
                                        style={{color:"blue"}}
                                        currency="CAD"
                                        shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                        onApprove={(data, actions) => this.onApprove(data, actions)}
                                    />
                                </div>
                            </div>
                            )} 
                    </div>
                    {paid && (
                        document.querySelector('.payment-details-container').style.border='none',        
                        <div className="confirmation-main-container">
                            <Confirmation id={this.state.paymentDetails.orderID}/>         
                            {value.emptyCart()}
                        </div>
                    )}       
                </div>                       
            )
        }}
        </ProductConsumer>        
    )
  }
}