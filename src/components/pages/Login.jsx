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
				<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
				<img
					src={require('../../assets/img/login.svg')}
					alt="login img"
					style={{  width: '80%', margin: '100px auto' }}
				/>
				</div>
			</Fade>
			<Fade>
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
					<hr width="30%" style={{ borderWidth: 1, borderStyle: 'solid', height: 0, color: '#582245' }} />
					<h4 style={{ color: '#582245' }}>Masuk Dengan</h4>
					<hr width="30%" style={{ borderWidth: 1, borderStyle: 'solid', height: 0, color: '#582245' }} />
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
