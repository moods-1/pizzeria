import React from 'react';
import { NavLink } from 'react-router-dom';
import EmptyCart from '../../images/emptyCartBlue.png';
import './EmptyMessage.scss';

const EmptyMessage = ({ message, height, background, color }) => {
	const styles = {
		width: '100%',
		height: `${height || 79}vh`,
		padding: '10px',
		display: 'grid',
		placeItems: 'center',
		backgroundColor: background || '#ffffff',
		color: color || '#000000',
	};
	return (
		<div style={styles}>
			<div className='empty-content'>
				<img src={EmptyCart} alt='empty-cart' width='50%' />
				<h4>{message}</h4>
				<NavLink to='/menu'>
					<button>ADD PIZZAS</button>
				</NavLink>
			</div>
		</div>
	);
};

export default EmptyMessage;
