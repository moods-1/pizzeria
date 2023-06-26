import React from 'react';
import { Link } from 'react-router-dom';

const HomeGallery = ({ products }) => {
	return (
		<div className='home-gallery'>
			<h1>Favourites</h1>
			{products.slice(0, 3).map((product) => (
				<div key={product.id} className='gallery-box'>
					<p className='gallery-box-title'>{product.name}</p>
					<Link to='/menu'>
						<div className='gallery-image-box'>
							<img src={product.image} alt='pizza' />
						</div>
					</Link>
					<p className='gallery-box-story'>{product.story}</p>
				</div>
			))}
		</div>
	);
};

export default HomeGallery;
