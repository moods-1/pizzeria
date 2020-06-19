import React ,{Component} from 'react';
import '../styles/menu.css';
import pie1 from '../images/figGoatCheese.webp';
import cart from '../images/cartPlus.webp';

export default class Menu extends Component{
    state={
        pizza : {
            title: "",
            price: "",
        }
    }
    handleCart = e =>{
        console.log(e.target.parentElement.parentElement);
    }
    
    render(){
    
        return(
            <div className="menu-main-container">
                <div className="menu-box" id="menu-box1">
                    <div className="pizza-box">
                        <img src={pie1} alt="pie"/>
                    </div>
                    <div className="description-box">
                        <div className="description-box-title">
                            <h1 id="pizza-title">Figaro</h1>
                        </div>
                        <p id="ingredients">Mozzarella and goat cheese, figs, olive oil, and balsamic drizzle.</p>
                        <div className="serving-price">
                            <p id="serves"><strong>Serves: 4</strong></p>
                            <p>
                                <strong>Price: $
                                <span id="menu-price">22
                                </span>
                                </strong>
                            </p>
                        </div>
                    </div>
                    <div className="cart-box">
                       <img src={cart} alt="cart" name="cart" onClick={this.handleCart} />
                    </div>
                </div>
                
                                
                <div className="menu-box" id="menu-box2">
                    <div className="pizza-box"></div>
                    <div className="description-box"></div>
                    <div className="counter-box"></div>
                </div>
                <div className="menu-box" id="menu-box3">
                    <div className="pizza-box"></div>
                    <div className="description-box"></div>
                    <div className="counter-box"></div>
                </div>
                <div className="menu-box" id="menu-box4">
                    <div className="pizza-box"></div>
                    <div className="description-box"></div>
                    <div className="counter-box"></div>
                </div>
                <div className="menu-box" id="menu-box5">
                    <div className="pizza-box"></div>
                    <div className="description-box"></div>
                    <div className="counter-box"></div>
                </div>
            </div>
        )
    }
}