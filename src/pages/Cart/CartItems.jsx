import React, { useState, useEffect } from 'react';
import { useStateContext } from '../../context/contextAPI';
import Button from '../../components/Button/Button';

const CartItems = () => {
	const [cartTotal, setCartTotal] = useState(0);
	const { cart, removeItem, handleCartQty } = useStateContext();

	const handleQty = (value, id, type) => {
		let num = value;
		type === 'increment' ? num++ : num--;
		num = num >= 10 ? 10 : num;
		if (cartTotal < 10) {
			handleCartQty(id, num);
		} else if (cartTotal === 10 && type === 'decrement') {
			handleCartQty(id, num);
		}
	};

	useEffect(() => {
		let total = 0;
		cart.forEach((c) => {
			total += c.count;
		});
		setCartTotal(total);
	}, [cart]);

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
						onClick={() => removeItem(cartData.id)}
					/>
					<Button
						className='cart-remove-button'
						label='Remove'
						width='100%'
						background='#ff0000'
						clickFunction={() => removeItem(cartData.id)}
					/>
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
