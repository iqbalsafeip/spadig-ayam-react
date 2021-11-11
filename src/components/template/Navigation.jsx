import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div
			style={{
				position: 'fixed',
				bottom: 0,
				backgroundColor: '#68C93E',
				height: 56,
				width: '100%',
				zIndex: 9,
				maxWidth: '480px',
				display: 'flex',
				tableLayout: 'fixed',
				borderCollapse: 'collapse',
				boxShadow: '0 -2px 10px 0 rgba(0,0,0,.1)',
				flexDirection: 'row',
				justifyContent: 'space-around'
			}}
		>
			<NavLink
				activeStyle={{
					color: 'white'
				}}
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					color: '#3da310',
					textDecoration: 'none',
					fontWeight: 'bold',
					fontSize: 14
				}}
				exact
				to="/"
			>
				<img
					src={require('../../assets/img/home.svg')}
					alt=""
					style={{ fill: 'white', width: 25, marginTop: 5 }}
				/>
				<span>Home</span>
			</NavLink>
			<NavLink
				activeStyle={{
					color: 'white'
				}}
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					color: '#3da310',
					textDecoration: 'none',
					fontWeight: 'bold',
					fontSize: 14
				}}
				to="/voting"
			>
				<img
					src={require('../../assets/img/archive.svg')}
					alt=""
					style={{ fill: 'white', width: 25, marginTop: 5 }}
				/>
				<span>My Voting</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
