import React from 'react';
import Header from '../template/Header';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import User from '../../utils/redux/user_actions';
import { useDispatch } from 'react-redux';

import '../../App.css';

const UnAuthScreen = () => {
	const dispatch = useDispatch();
	return (
		<React.Fragment>
			<Fade>
				<Header />
			</Fade>
			<Fade>
				<div
					style={{
						height: '100vh',
						width: '100%',
						backgroundColor: '#68C93E',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<div
						style={{
							width: 250,
							height: 250,
							backgroundColor: 'white',
							borderRadius: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: 30
						}}
					>
						<img src={require('../../assets/img/logo.png')} height="200" width="200" />
					</div>
					<span style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Anda Bingung ?</span>
					<span style={{ fontSize: 36, fontWeight: 'bold', color: 'white' }}>Just Vote It</span>

					<Link
						style={{
							width: 120,
							height: 30,
							backgroundColor: 'white',
							borderRadius: 10,
							textDecoration: 'none',
							fontWeight: 'bold',
							textAlign: 'center',
							marginTop: 30
						}}
						to="/login"
					>
						Masuk
					</Link>
				</div>
			</Fade>
		</React.Fragment>
	);
};

export default UnAuthScreen;
