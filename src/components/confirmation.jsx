import React, { Component } from 'react';
import {ProductConsumer} from '../backend/contextAPI';
import {DateFormatter} from '../dateFormatter';
import '../styles/checkout.css'
const dater = new DateFormatter();

export default class Confirmation extends Component{
   
    confirmationTime=()=>{
        const dateBox = dater.currentTime();
        const {fullMonth, date, hour, minutes, meridiem} = dateBox;
        let  orderTime = `${fullMonth}, ${date} ${hour}:${minutes} ${meridiem}`;
        return orderTime;  
    }
    
    render(){    
        return(
            <ProductConsumer>
                {value=>{ 
                    return(
                        <div className="confirmation-main">
                            <div className="confirmation-box">
                                <div className="confirmation-header">
                                    <div className="shadow-box">
                                        <h1>Pizzeria Moodi</h1>
                                        <h2>Order Confirmation</h2>
                                    </div>
                                </div>
                                <div className="confirmation-details-top">
                                    <h2>Thank you for doing business with us!</h2><br />
                                    <h3>Pick-up code: {(this.props.id).slice(-4)}</h3>
                                </div>
                                <div className="confirmation-details-bottom">
                                    <div className="confirmation-bottom-text-box">
                                        <p>Order received: {this.confirmationTime()}</p><br/>
                                        <p>Your order will be prepared and ready for pick-up in 40 minutes.</p>
                                        <br/>
                                    </div>
                                                             
                                </div>
                            </div>
                        </div>
                    )
                }                    
            }
            </ProductConsumer>
        )
    }
}
