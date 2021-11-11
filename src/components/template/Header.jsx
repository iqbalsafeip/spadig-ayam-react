import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../utils/redux/user_actions';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';

const Header = () => {
	const data = useSelector((state) => state);
	const dispatch = useDispatch();

	let logout = () => {
		swal({
			title: 'Yakin Keluar?',
			icon: 'warning',
			buttons: true,
			dangerMode: true
		}).then((willDelete) => {
			if (willDelete) {
				dispatch(User.Logout());
			}
		});
	};

	return (
		<div
			style={{ width: '100%', height: 60, backgroundColor: '#68C93E', boxShadow: '0 -2px 10px 0 rgba(0,0,0,.1)' }}
		>
			<div
				className="container"
				style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
			>
				<Link to="/">
					<div
						style={{
							width: 40,
							height: 40,
							backgroundColor: 'white',
							borderRadius: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: 10
						}}
					>
						<img src={require('../../assets/img/logo.png')} height="36" />
					</div>
				</Link>
				{data.isAuth ? (
					<Link onClick={() => logout()} style={{ textDecoration: 'none', color: '#fff' }}>
						<h5 style={{ fontSize: 16, fontWeight: 'bold' }}>Logout</h5>
					</Link>
				) : (
					<Link to="/login" style={{ textDecoration: 'none', color: '#fff' }}>
						<h5 style={{ fontSize: 16, fontWeight: 'bold' }}>Masuk</h5>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
