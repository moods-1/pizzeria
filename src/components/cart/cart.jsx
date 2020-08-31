import React, { Component } from 'react';
import {ProductConsumer} from '../../backend/contextAPI';
import CartHeaders from './cartHeaders';
import CartItems from './cartItems';
import CartTotal from './cartTotal';
import CheckoutButton from './checkoutButton';
import '../../styles/menuCart.css';

export default class Cart extends Component{
        
    componentDidMount(){
        const hideMobile = Array.from(document.getElementsByClassName('hide-mobile'));
        if(hideMobile){
            window.addEventListener('resize',()=>{
                if(window.innerWidth < 768) hideMobile.forEach(item => item.classList.remove('d-none'));
                else hideMobile.forEach(item => item.classList.add('d-none'));
            })  
        }
        if(hideMobile){
            if(window.innerWidth < 768) hideMobile.forEach(item => item.classList.remove('d-none'));
            else hideMobile.forEach(item => item.classList.add('d-none'));
        }          
    }
    
    render(){
        return(
            <section>
                <ProductConsumer>
                    {value=>{
                        if(value.cart.length){
                            return(
                                <div className="main-cart-container">
                                    <div>
                                        <h1 id="cart-H1">Your Cart</h1>
                                    </div>
                                    <CartHeaders />
                                    <CartItems items={value} />                                    
                                    <CartTotal totals={value} />
                                    <CheckoutButton />                                     
                                </div>                                
                            )  
                        }else{
                            return(
                                <div className="empty-cart">
                                    <h1 style={{color:"white",textAlign:"center"}}>
                                        Currently your cart is empty.
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