import React from 'react';
import { Header, Footer } from './components';
import {
	Home,
	About,
	Cart,
	Menu,
	Checkout,
	Confirmation,
	Error404,
	Pay,
} from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
	return (
		<Router>
			<div className='main-container'>
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/about' element={<About />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/pay' element={<Pay />} />
					<Route path='/confirmation' element={<Confirmation />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
