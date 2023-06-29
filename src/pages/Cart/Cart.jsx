import { useStateContext } from '../../context/contextAPI';
import CartHeaders from './CartHeaders';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import LinkButton from './LinkButton';
import { EmptyMeassage } from '../../components';
import './Cart.scss';

const Cart = () => {
	const { cart, cartSubtotal } = useStateContext();

	return (
		<>
			{cart.length ? (
				<div className='main-cart-container'>
					<div className='cart-head'>
						<h1>Your Cart</h1>
						<h5>*Maximum 10 pizzas</h5>
					</div>
					<CartHeaders />
					<CartItems />
					<CartTotal cartSubtotal={cartSubtotal} />
					<LinkButton page='checkout' label="Checkout" className="checkout-button" />
					<br />
					<LinkButton page='menu' label="Continue Shopping" className="continue-button" />
				</div>
			) : (
				<EmptyMeassage message='Currently, your cart is empty.' />
			)}
		</>
	);
};
export default Cart;
