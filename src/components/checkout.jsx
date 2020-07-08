import React from 'react'
import '../styles/checkout.css';

export default class CheckoutForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showCheckoutPlus: false,
            firstName: "",
            lastName: "",
            phone: "",
            email:"",
            firstNameError:"", 
            lastNameError:"",
            phoneError:"",
            emailError:""
        }
    }
    
    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
            }
        )
    }
    
    validator = () =>{
        let status = this.state;
        if(!status.firstName.length || status.firstName.length > 20){
            this.setState({
                firstNameError: "Cannot be empty or greater than 20."
            });
        setTimeout(()=>{
            this.setState({
                firstNameError: ""
            })
        },2500);
        return false;
        }
        if(!status.lastName.length || status.lastName.length > 20){
            this.setState({
                lastNameError: "Cannot be empty or greater than 20."
            });
            setTimeout(()=>{
                this.setState({
                    lastNameError: ""
                })
            },2500);
            return false;
        }
        if(!status.email.includes('@') ||  !status.email.length || status.email.length > 25){
            this.setState({
                emailError: "Must contain an '@' or be less the 25."
            });
            setTimeout(()=>{
                this.setState({
                    emailError: ""
                })
            },2500);
            return false;
        }
        if(isNaN(status.phone) || status.phone.length !== 10){
            this.setState({
                phoneError: "Must be a number and 10 digits."
            });
            setTimeout(()=>{
                this.setState({
                    phoneError: ""
                })
            },2500);
            return false;
        }
        return true;
    }
    
    handleSubmit = e =>{
        e.preventDefault();
        const isValid = this.validator();
        if(isValid) this.props.history.push('/pay')            
    }
        
    render(){
        return(
            <div className="checkout-main-container">
                <div className="outter-form-container">
                        <form action="">
                            <h1>Customer Details</h1>
                            <input  name="firstName" 
                                    type="text" 
                                    placeholder="First name"
                                    onChange={this.handleChange}/><br/>
                                    <div className="error-message">
                                        {this.state.firstNameError}
                                    </div>
                            <input  name="lastName" 
                                    type="text" 
                                    placeholder="Last name"
                                    onChange={this.handleChange}/><br/>
                                    <div className="error-message">
                                        {this.state.lastNameError}
                                    </div>
                            <input  name="phone" 
                                    type="text" 
                                    placeholder="9055555555"
                                    onChange={this.handleChange}/><br/>
                                    <div className="error-message">
                                        {this.state.phoneError}
                                    </div>
                            <input  name="email"    
                                    type="email" 
                                    placeholder="email@you.com"
                                    onChange={this.handleChange}/><br/>
                                    <div className="error-message">
                                        {this.state.emailError}
                                    </div>
                            <button onClick={this.handleSubmit} 
                                    type="submit">Submit</button>
                        </form>   
                </div>
            </div>
        )      
    }
} 