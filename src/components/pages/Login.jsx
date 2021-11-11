import React from 'react';
import Header from '../template/Header';
import Fade from 'react-reveal/Fade';

import User from '../../utils/redux/user_actions';
import { useDispatch } from 'react-redux';

import '../../App.css';

const Login = () => {
	const dispatch = useDispatch();
	return (
		<React.Fragment>
			<Fade>
				<Header />
			</Fade>
			<Fade>
				<img
					src={require('../../assets/img/login.png')}
					alt="login img"
					width="100%"
					style={{ marginTop: 30 }}
				/>
			</Fade>
			<Fade>
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
					<hr width="30%" style={{ borderWidth: 1, borderStyle: 'solid', height: 0, color: '#68C93E' }} />
					<h4 style={{ color: '#68C93E' }}>Masuk Dengan</h4>
					<hr width="30%" style={{ borderWidth: 1, borderStyle: 'solid', height: 0, color: '#68C93E' }} />
				</div>
			</Fade>
			<Fade>
				<button
					className="btnGoogle"
					style={{
						fontSize: 15,
						fontWeight: 'bold',
						color: 'white',
						alignItems: 'center',
						justifyContent: 'center',
						display: 'flex',
						width: '50%',
						margin: 'auto',
						backgroundColor: '#DB402C',
						borderRadius: 10,
						border: 'none',
						outline: 'none'
					}}
					onClick={() => dispatch(User.Login())}
				>
					<img src={require('../../assets/img/google.png')} alt="google icon" width="40" />
					Google
				</button>
			</Fade>
		</React.Fragment>
	);
};

export default Login;
