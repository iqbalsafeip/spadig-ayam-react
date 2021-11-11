import React from 'react';
import Header from '../template/Header';
import Fade from 'react-reveal/Fade';

import User from '../../utils/redux/user_actions';
import { useDispatch } from 'react-redux';

import '../../App.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
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
					<span style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Ruang Tidak Ditemukan</span>
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
						to="/"
						onClick={() => dispatch({ type: 'SET_NOT_FOUND', value: true })}
					>
						Kembali
					</Link>
				</div>
			</Fade>
		</React.Fragment>
	);
};

export default NotFound;
