import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { data } from './data';

const Context = createContext();

export const StateContext = ({ children }) => {
	const [state, setState] = useState({
		products: data,
		cart: [],
		cartSubtotal: 0,
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		empty: true,
	});

	const getItem = useCallback((id) => {
		const product = state.products.find((item) => item.id === id);
		return product;
	},[state.products]);

	const addToCart = (id) => {
		let tempProduct = [...state.products];
		const index = tempProduct.indexOf(getItem(id));
		const product = tempProduct[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		const newCart = [...state.cart, product];
		localStorage.setItem('localCart', JSON.stringify(newCart));
		setState((prevState) => ({
			...prevState,
			products: tempProduct,
			cart: [...newCart],
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
		const newCart = [...tempCart];
		localStorage.setItem('localCart', JSON.stringify(newCart));
		setState((prevState) => ({
			...prevState,
			cart: [...newCart],
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
		const newCart = [...tempCart];
		localStorage.setItem('localCart', JSON.stringify(newCart));
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
			const newCart = [...tempCart];
			localStorage.setItem('localCart', JSON.stringify(newCart));
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
		let localProducts = state.products.map((product) => ({
			...product,
			inCart: false,
		}));
		if (state.empty) {
			localStorage.removeItem('localCart');
			localStorage.removeItem('localCartSubtotal');
			setState((prevState) => ({
				...prevState,
				products: localProducts,
				cart: [],
				empty: false,
			}));
		}
	};

	useEffect(() => {
		let subtotal = 0;
		state.cart.map((item) => (subtotal += item.total));
		localStorage.setItem('localCartSubtotal', subtotal);
		setState((prevState) => ({ ...prevState, cartSubtotal: subtotal }));
	}, [state.cart]);

	useEffect(() => {
		let cart = [];
		let subtotal = state.subtotal;
		const localProducts = [...state.products];
		if (localStorage.getItem('localCart')) {
			let localCart = JSON.parse(localStorage.getItem('localCart'));
			if (typeof localCart === 'object') {
				cart = localCart;
				cart.forEach((c) => {
					let targetIndex = localProducts.indexOf(getItem(c.id));
					localProducts[targetIndex].inCart = true;
				});
			} else {
				cart = [];
			}
		}
		if (localStorage.getItem('localCartSubtotal')) {
			subtotal = JSON.parse(localStorage.getItem('localCartSubtotal'));
		}
		setState((prevState) => ({
			...prevState,
			cart: [...cart],
			products: [...localProducts],
			subtotal
		}));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
