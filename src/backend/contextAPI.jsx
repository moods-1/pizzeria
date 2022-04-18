import React, { Component } from 'react'
import {data} from './data';
const ProductContext = React.createContext();

class ProductProvider extends Component{
    state={
        products: data,
        cart: [],
        cartSubtotal: 0,
        firstName: "",
        lastName:"",
        email: "",
        phone:"",
        empty: true
    }
    
    getItem = id =>{
        const product = this.state.products.find(item=> item.id === id);
        return product;
    }
    
    addToCart = id =>{
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return{products : tempProduct, cart:[...this.state.cart, product]}
        }, ()=>{this.makeTotal()}
        )
    }
    removeItem = id =>{
        let tempProduct = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item=> item.id !== id);
        const index = tempProduct.indexOf(this.getItem(id));
        let removedProduct = tempProduct[index];
        removedProduct.inCart = false;
        removedProduct.total = 0;
        removedProduct.count= 0;
        
        this.setState(()=>{
            return{
                cart:[...tempCart],
                products : [...tempProduct]
                }
            }, ()=>{this.makeTotal()}
        )
    }

    increment = id =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(()=>{
            return{cart: [...tempCart]}
        },()=>{
            this.makeTotal();
        })
    }

    decrement = id =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        if(product.count > 0){
            product.count = product.count - 1;
            product.total = product.count * product.price;
            this.setState(()=>{
                return{cart: [...tempCart]}
            },()=>{
                this.makeTotal();
            })
        }
        product.count === 0 && this.removeItem(selectedProduct.id);
        
    }
    makeTotal = () =>{
        let subtotal = 0;
        this.state.cart.map(item => (subtotal += item.total));
        //const total = subtotal;
        this.setState(()=> {
            return{cartSubtotal: subtotal}}
        )
    }
    customerDetails =(firstName,lastName,email,phone) =>{
        this.setState({firstName,lastName,email,phone})
    }
    emptyCart =()=>{
        if(this.state.empty){
            this.setState({cart: [], empty: false})
        }
    }
    
    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                makeTotal: this.makeTotal,
                removeItem: this.removeItem,
                customerDetails: this.customerDetails,
                emptyCart: this.emptyCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};