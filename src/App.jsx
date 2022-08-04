import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SideMenu from './shared/components/Navigation/SideMenu';
import './App.css';
import Main from './main/pages/Main';
import LoginForm from './user/pages/LoginForm';
import RegForm from './user/pages/RegForm';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/login' exact>
					<LoginForm />
				</Route>
				<Route path='/reg' exact>
					<RegForm />
				</Route>
				<>
					<SideMenu />
					<Route path='/' exact>
						<Main />
					</Route>
				</>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
