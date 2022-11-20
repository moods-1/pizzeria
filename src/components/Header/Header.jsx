import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Burger from '../../images/burger.png';
import Fries from '../../images/fries.png';
import Cart from '../../images/cart.png';
import { useStateContext } from '../../backend/contextAPI';
import { headerLinks } from '../../helpers/constants';
import './Header.scss';
import $ from 'jquery';

function Header() {
	const [burgerTracker, setBurgerTracker] = useState(true);
	const burgerSource = burgerTracker ? Burger : Fries;
	const { cart: cartItems } = useStateContext();

	const burgerToggle = () => {
		$('.nav-list').toggleClass('nav-shift');
		$('.nav-list li').each(function (index) {
			if ($(this).parents().hasClass('nav-shift')) {
				$(this).css({
					animation: `navEaseIn 0.5s ease forwards ${index / 7 + 0.5}s`,
				});
			} else {
				$(this).css({ animation: '' });
			}
		});
		setBurgerTracker(!burgerTracker);
	};

	const handleLink = (e) => {
		$('.nav-list-item').each(function () {
			$(this).css({ animation: '' });
		});
		$('.nav-list').toggleClass('nav-shift');
		setBurgerTracker(!burgerTracker);
	};

	const handleCartClick = () => {
		$('.nav-list').removeClass('nav-shift');
		setBurgerTracker(true);
	};

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 767) {
				setBurgerTracker(true);
				$('.nav-list').removeClass('nav-shift');
				$('.nav-list li').each(function () {
					$(this).css({ animation: '' });
				});
			}
		});
		return () => window.removeEventListener('resize', () => {});
	});

	return (
		<header>
			<div className='header-brand'>
				<Link to='/'>
					<h1>Pizzeria Moodi</h1>
				</Link>
			</div>
			<div className='top-nav'>
				<nav className='horizontal-nav'>
					<ul className='nav-list' onClick={(e) => handleLink(e)}>
						{headerLinks.map(({ id, title, route }) => (
							<NavLink
								to={route}
								exact={true}
								key={id}
								className='nav-list-item'
							>
								{title}
							</NavLink>
						))}
					</ul>
				</nav>
				<div className='burger-box' onClick={burgerToggle}>
					<img src={burgerSource} alt='burger' />
				</div>
				<ul>
					<div className='cart' onClick={handleCartClick}>
						<NavLink to='/cart'>
							<img src={Cart} alt='cart' />
							<div className={`cart-value ${cartItems.length ? 'active' : ''}`}>
								{cartItems.length}
							</div>
						</NavLink>
					</div>
				</ul>
			</div>
		</header>
	);
}
export default Header;
