import React ,{Component} from 'react';
import {Link} from 'react-router-dom'
import burger from '../images/burger.png';
import fries from '../images/fries.png';
import {ProductConsumer} from '../backend/contextAPI';
import '../styles/main.css';

export default class Header extends Component{
    state={
        burgerTracker: true
    }
    
    burgerToggle = e =>{
        this.setState({
            burgerTracker: !this.state.burgerTracker
        },()=>{
            document.querySelector('.nav-list').classList.toggle('nav-shift');
            document.querySelectorAll('.nav-list li').forEach((link, index) =>{
                link.style.animation = `navEaseIn 0.5s ease forwards ${index / 7 + 0.5}s`;
            })
        })    
    }
    handleLink = e =>{
        this.setState({burgerTracker: !this.state.burgerTracker});
        document.querySelector('.nav-list').classList.toggle('nav-shift');
        document.querySelectorAll('.nav-list li').forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navEaseIn 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        })
    }
    componentDidMount(){
        const burgerBox = document.querySelector('.burger-box');
        if(window.innerWidth <= 768){
            burgerBox.classList.remove('d-none')
        }
        window.addEventListener('resize',()=>{
            if(window.innerWidth <= 768){
                burgerBox.classList.remove('d-none')
            }
            else{
                burgerBox.classList.add('d-none');
                this.setState({
                    burgerTracker: true
                })
                document.querySelector('.nav-list').classList.remove('nav-shift');
            }
        })
    }
    
    render(){
        const burgerSource = this.state.burgerTracker? burger:fries;
        
        return(
             <header>
                <h1>Pizzeria Moodi</h1>
                    <nav className="horizontal-nav">
                        <ul className="nav-list" onClick={this.handleLink}>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <li className="nav-list-item">Home</li>
                            </Link>
                            <Link to="/menu" style={{ textDecoration: 'none' }}>
                                <li className="nav-list-item">Menu</li>
                            </Link>
                            <Link to="/about" style={{ textDecoration: 'none' }}>
                                <li className="nav-list-item">About</li>
                            </Link>
                            <ProductConsumer>
                                {value=>{
                                    return( 
                                        <Link to="/cart" style={{ textDecoration: 'none'}}>
                                            <li 
                                                className="nav-list-item">
                                                Cart ({value.cart.length})
                                            </li>
                                        </Link>
                                    )
                                }
                            }
                            </ProductConsumer>
                        </ul>
                    </nav>
                    <div 
                        className="burger-box d-none"
                        onClick={this.burgerToggle}
                    >
                        <img src={burgerSource} alt="burger" />
                    </div>
            </header>
        )
        
    }
    
}
  
