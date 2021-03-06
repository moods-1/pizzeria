import React,{Component} from 'react'
import '../styles/checkout.css';

export default class CheckoutForm extends Component{
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
        if(isValid){
            if(localStorage.getItem('credentials')){
                this.props.history.push('/pay');
            }
            else{
                let details = JSON.stringify(this.state);
                localStorage.setItem('credentials',details);
                this.props.history.push('/pay');
            }           
        } 
    }
    
    componentDidMount(){
        if(localStorage.getItem('credentials')){
            let credentials = JSON.parse(localStorage.getItem('credentials'));
            document.getElementById('firstName').value = credentials.firstName;
            document.getElementById('lastName').value = credentials.lastName;
            document.getElementById('phone').value = credentials.phone;
            document.getElementById('email').value = credentials.email;
            this.setState({
                firstName: credentials.firstName,
                lastName: credentials.lastName,
                phone: credentials.phone,
                email: credentials.email
            })
        }
    }

    render(){
        
        return(
            <div className="checkout-main-container">
                <div className="outter-form-container">
                        <form action="">
                            <h1>Customer Details</h1>
                            <input  name="firstName" 
                                    id="firstName" 
                                    type="text" 
                                    placeholder="First name"
                                    onChange={this.handleChange}/><br/>
                                    <div className="error-message">
                                        {this.state.firstNameError}
                                    </div>
                            <input  name="lastName" 
                                    id="lastName"
                                    type="text" 
                                    placeholder="Last name"
                                    onChange={this.handleChange}/><br/>
                                    <div className="error-message">
                                        {this.state.lastNameError}
                                    </div>
                            <input  name="phone" 
                                    id="phone"
                                    type="text" 
                                    placeholder="9055555555"
                                    onChange={this.handleChange}/><br/>
                                    <div className="error-message">
                                        {this.state.phoneError}
                                    </div>
                            <input  name="email" 
                                    id="email"   
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