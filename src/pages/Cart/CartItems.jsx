import React from 'react';
import { useStateContext } from '../../context/contextAPI';

const CartItems = () => {
	const { cart, removeItem, handleCartQty } = useStateContext();

	const handleQty = (value, id, type) => {
		let num = value;
		type === 'increment' ? num++ : num--;
		handleCartQty(id, num);
	};
	
	return cart.map((cartData) => (
		<div key={cartData.id}>
			<div className='horizontal-flex cart-row'>
				<div className='cart-column' id='cart-image-box'>
					<img src={cartData.image} alt='pizza' />
				</div>
				<div className='cart-column' id='cart-pizza-name'>
					{cartData.name}
				</div>
				<div className='cart-column' id='cart-pizza-price'>
					<div>Price: &nbsp;</div>${cartData.price}
				</div>
				<div className='cart-column' id='cart-pizza-quantity'>
					<div>Qty: &nbsp;</div>
					<div className='cart-quantity-box'>
						<div
							className='cart-adjustor'
							onClick={() => {
								handleQty(cartData.count, cartData.id, 'decrement');
							}}
						>
							-
						</div>
						<span id='cart-qty'>{cartData.count}</span>
						<div
							className='cart-adjustor'
							onClick={() => {
								handleQty(cartData.count, cartData.id, 'increment');
							}}
						>
							+
						</div>
					</div>
				</div>
				<div className='cart-column' id='cart-remove-box'>
					<i
						className='fa fa-trash cart-remove-icon'
						aria-hidden='true'
						onClick={() => {
							removeItem(cartData.id);
						}}
					/>
					<button className='cart-remove-button'>Remove</button>
				</div>
				<div className='cart-column' id='cart-pie-total'>
					<div>Total: &nbsp;</div>${cartData.total}
				</div>
			</div>
			<hr className='cart-hr' />
		</div>
	));
};

export default CartItems;
