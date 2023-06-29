import { useStateContext } from '../../context/contextAPI';
import CartHeaders from './CartHeaders';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import CheckoutButton from './CheckoutButton';
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
						<p>*Maximum 10 pizzas</p>
					</div>
					<CartHeaders />
					<CartItems />
					<CartTotal cartSubtotal={cartSubtotal} />
					<CheckoutButton />
				</div>
			) : (
				<EmptyMeassage message='Currently, your cart is empty.' />
			)}
		</>
	);
};
export default Cart;
