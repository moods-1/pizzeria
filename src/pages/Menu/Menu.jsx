import React from 'react';
import { useStateContext } from '../../context/contextAPI';
import './Menu.scss';
import Button from '../../components/Button/Button';

const Menu = () => {
	const { products, addToCart, removeItem } = useStateContext();

	return (
		<div className='menu-main-container'>
			<div>
				<h1 id='menu-title'>Pizzas</h1>
			</div>
			<div className='menu-pizzas-box'>
				{products.map((product) => (
					<div key={product.id} className='menu-box' id='menu-box1'>
						<h3>{product.name}</h3>
						<div className='menu-image-box'>
							<img src={product.image} alt='pie' />
						</div>
						<div className='description-box'>
							<p>{product.description}</p>
						</div>
						<div className='serving-price'>
							<p>
								<strong>Serves:</strong>
								<span> {product.serves}</span>
							</p>
							<p>
								<strong>Price:</strong>
								<span> ${product.price}</span>
							</p>
						</div>
						<div>
							{product.inCart ? (
								<Button
									label='Remove from cart'
									background='red'
									width='140px'
									clickFunction={() => removeItem(product.id)}
								/>
							) : (
								<Button
									label='Add to cart'
									width='140px'
									clickFunction={() => addToCart(product.id)}
								/>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Menu;
