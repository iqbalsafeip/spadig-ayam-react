import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../utils/redux/user_actions';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { Fade } from 'react-reveal';

const Header = () => {
	return (
		<Fade>
			<footer
				style={{
					padding: '30px 0px 30px 0px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 12,
					backgroundColor: '#582245',
					color: 'white'
				}}
			>
				<span>Credit : </span>
				<span>@Iqbalsafei</span>
			</footer>
		</Fade>
	);
};

export default Header;
