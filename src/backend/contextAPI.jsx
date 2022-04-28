import React, { createContext, useContext, useState, useEffect } from "react";
import { data } from "./data";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [state, setState] = useState({
    products: data,
    cart: [],
    cartSubtotal: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    empty: true,
  });
  const [linkId, setLinkId] = useState(0);

  const getItem = (id) => {
    const product = state.products.find((item) => item.id === id);
    return product;
  };

  const addToCart = (id) => {
    let tempProduct = [...state.products];
    const index = tempProduct.indexOf(getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setState((prevState) => ({
      ...prevState,
      products: tempProduct,
      cart: [...state.cart, product],
    }));
  };

  const removeItem = (id) => {
    let tempProduct = [...state.products];
    let tempCart = [...state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProduct.indexOf(getItem(id));
    let removedProduct = tempProduct[index];
    removedProduct.inCart = false;
    removedProduct.total = 0;
    removedProduct.count = 0;
    setState((prevState) => ({
      ...prevState,
      cart: [...tempCart],
      products: [...tempProduct],
    }));
  };

  const increment = (id) => {
    let tempCart = [...state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setState((prevState) => ({ ...prevState, cart: [...tempCart] }));
  };

  const decrement = (id) => {
    let tempCart = [...state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    if (product.count > 0) {
      product.count = product.count - 1;
      product.total = product.count * product.price;
      setState((prevState) => ({ ...prevState, cart: [...tempCart] }));
    }
    product.count === 0 && removeItem(selectedProduct.id);
  };

  const customerDetails = (firstName, lastName, email, phone) => {
    setState((prevState) => ({
      ...prevState,
      firstName,
      lastName,
      email,
      phone,
    }));
  };
  const emptyCart = () => {
    let localProducts = state.products.map(product=>({...product, inCart: false}))
    if (state.empty) {
      setState((prevState) => ({ ...prevState, products: localProducts, cart: [], empty: false }));
    }
  };

  const addLinkId=(id)=> setLinkId(id);
  const removeLinkId=()=> setLinkId(null);

  useEffect(() => {
    let subtotal = 0;
    state.cart.map((item) => (subtotal += item.total));
    //const total = subtotal;
    setState((prevState) => ({ ...prevState, cartSubtotal: subtotal }));
  }, [state.cart]);

  return (
    <Context.Provider
      value={{
        ...state,
        addToCart,
        increment,
        decrement,
        removeItem,
        customerDetails,
        emptyCart,
        addLinkId,
        removeLinkId,
        linkId
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
