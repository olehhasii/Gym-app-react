import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SideMenu from './shared/components/Navigation/SideMenu';
import './App.css';
import Main from './main/pages/Main';

const App = () => {
	return (
		<BrowserRouter>
			<SideMenu />
			<Route path='/' exact>
				<Main />
			</Route>
		</BrowserRouter>
	);
};

export default App;
