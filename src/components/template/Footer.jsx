import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../utils/redux/user_actions';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';

const Header = () => {
	return (
		<footer
			style={{
				margin: '30px 0px 60px 0px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 12
			}}
		>
			<span>Credit : </span>
			<span>@Iqbalsafei</span>
		</footer>
	);
};

export default Header;
