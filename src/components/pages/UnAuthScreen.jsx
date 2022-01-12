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
						backgroundColor: '#582245',
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
							borderRadius: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: 30
						}}
					>
						<img src={require('../../assets/img/logo.png')} height="300" width="300" />
					</div>
					<span style={{ fontSize: 28, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Memiliki Keluhan Pada Ayam ?</span>
					<span style={{ fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>SPADIG-Ayam Solusinya!</span>
					<span style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>(Sistem Pakar Diagnosa Penyakit Ayam)</span>

					<Link
						style={{
							width: 120,
							height: 30,
							backgroundColor: 'white',
							borderRadius: 10,
							textDecoration: 'none',
							fontWeight: 'bold',
							textAlign: 'center',
							marginTop: 30,
							color: '#582245'
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
