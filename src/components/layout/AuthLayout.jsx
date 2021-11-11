import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingScreen from '../pages/LoadingScreen';

const AuthLayout = ({ component: Component, ...props }) => {
	const data = useSelector((state) => state);

	if (data.authLoad) {
		return <LoadingScreen />;
	} else {
		if (!data.isAuth) {
			return (
				<Route
					{...props}
					render={(props) => (
						<React.Fragment>
							<Component />
						</React.Fragment>
					)}
				/>
			);
		} else {
			return <Redirect to="/" />;
		}
	}
};

export default AuthLayout;
