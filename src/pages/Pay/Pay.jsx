import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useStateContext } from '../../context/contextAPI';
import Confirmation from '../Confirmation/Confirmation';
import './Pay.scss';

const Pay = () => {
	const { cartSubtotal, cart, emptyCart } = useStateContext();
	const [state, setState] = useState({
		showButtons: true,
		paid: false,
		emptyCart: true,
		paymentDetails: [],
	});

	const onApprove = (data, actions) => {
		actions.order.capture().then((details) => {
			const paymentData = {
				payerID: data.payerID,
				orderID: data.orderID,
			};
			setState((prevState) => ({
				...prevState,
				showButtons: false,
				paid: true,
				paymentDetails: paymentData,
			}));
		});
	};

	return (
		<div className='payment-main-container'>
			<div className='payment-details-container'>
				{state.showButtons && (
					<div style={{ position: 'relative' }}>
						<div className='payment-title-box'>
							<div className='payment-shadow-box'>
								<h1 id='payment-title'>Purchase Details</h1>
							</div>
						</div>
						{cart.map((cartData) => {
							return (
								<div key={cartData.id} className='payment-summary'>
									<div id='payment-summary-img'>
										<img src={cartData.image} alt='pizza' />
									</div>
									<div id='payment-summary-subject'>{cartData.name}</div>
									<div id='payment-summary-qty'>Qty: {cartData.count}</div>
									<div id='payment-summary-total'>
										${cartData.total.toFixed(2)}
									</div>
								</div>
							);
						})}
						<div className='payment-total-box'>
							<div id='payment-total-price'>
								<div className='payment-total-title'>Subtotal total :</div>
								<div className='payment-total-money'>
									${cartSubtotal.toFixed(2)}
								</div>
								<div className='payment-total-title'>GST/HST :</div>
								<div className='payment-total-money'>
									${(cartSubtotal * 0.13).toFixed(2)}
								</div>
								<div className='payment-total-title'>Order total :</div>
								<div className='payment-total-money'>
									${(cartSubtotal * 1.13).toFixed(2)}
								</div>
							</div>
						</div>
						<div className='payInfo'>
							<p>Use the following credentials:</p>
							<p>email: me@test.ca</p>
							<p>password: Pizzeria1</p>
						</div>
						<div className='payPal-buttons-box'>
							<PayPalButton
								amount={(cartSubtotal * 1.13).toFixed(2)}
								style={{ color: 'blue' }}
								currency='CAD'
								shippingPreference='NO_SHIPPING' // default is "GET_FROM_FILE"
								onApprove={(data, actions) => onApprove(data, actions)}
							/>
						</div>
					</div>
				)}
			</div>
			{state.paid &&
				((document.querySelector('.payment-details-container').style.border =
					'none'),
				(
					<div className='confirmation-main-container'>
						<Confirmation
							id={state.paymentDetails.orderID}
							emptyCart={emptyCart}
						/>
					</div>
				))}
		</div>
	);
};
export default Pay;
