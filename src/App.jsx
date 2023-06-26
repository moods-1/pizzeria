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

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='main-container'>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/menu' component={Menu} />
					<Route path='/about' component={About} />
					<Route path='/cart' component={Cart} />
					<Route path='/checkout' component={Checkout} />
					<Route path='/pay' component={Pay} />
					<Route path='/confirmation' component={Confirmation} />
					<Route path='*' component={Error404} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
