import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
	const isAuth = useSelector((state) => state.user.isAuth);

	return (
		<Route
			{...rest}
			render={() => {
				return isAuth ? children : <Redirect to='/login' />;
			}}
		/>
	);
};

export default PrivateRoute;
