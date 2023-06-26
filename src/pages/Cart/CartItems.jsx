import React from 'react';
import { useStateContext } from '../../context/contextAPI';

const CartItems = () => {
	const { cart, decrement, increment, removeItem } = useStateContext();
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
					<div>
						<button
							className='cart-adjustor'
							onClick={() => {
								decrement(cartData.id);
							}}
						>
							-
						</button>
						<span id='cart-qty'>{cartData.count}</span>
						<button
							className='cart-adjustor'
							onClick={() => {
								increment(cartData.id);
							}}
						>
							+
						</button>
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
