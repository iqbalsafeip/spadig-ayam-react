import React, { useEffect, useState } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import Navigation from '../template/Navigation';
import { useSelector, useDispatch } from 'react-redux';
import LoadingScreen from '../pages/LoadingScreen';
import UnAuthScreen from '../pages/UnAuthScreen';
import Footer from '../template/Footer';

import Vote from '../../utils/redux/vote_actions';
const HomeLayout = ({ component: Component, ...props }) => {
	const data = useSelector((state) => state);
	const [ isNotFound, setNotFound ] = useState(true);
	const dispatch = useDispatch();


	if (!data.notFound) {
		return <Redirect to="/notfound" />;
	}

	if (data.authLoad) {
		return <LoadingScreen />;
	} else {
		if (data.isAuth) {
			return (
				<Route
					{...props}
					render={(props) => (
						<React.Fragment>
							<React.Fragment>
								<Component />
								<Footer />
								<Navigation />
							</React.Fragment>
						</React.Fragment>
					)}
				/>
			);
		} else {
			return <UnAuthScreen />;
		}
	}
};

export default HomeLayout;
