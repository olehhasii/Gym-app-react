import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SideMenu from './shared/components/Navigation/SideMenu';
import './App.css';
import Main from './main/pages/Main';
import LoginForm from './user/pages/LoginForm';
import RegForm from './user/pages/RegForm';
import MainNotAuth from './main/pages/MainNotAuth';
import PrivateRoute from './features/PrivateRoute';
import UserPrograms from './programs/pages/UserPrograms';

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
				<Route path='/' exact>
					<MainNotAuth />
				</Route>
				<>
					<SideMenu />
					<PrivateRoute path='/main'>
						<Main />
					</PrivateRoute>
					<PrivateRoute path='/programs'>
						<UserPrograms />
					</PrivateRoute>
				</>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
