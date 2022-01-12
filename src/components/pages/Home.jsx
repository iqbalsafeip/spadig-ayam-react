import React, { useState } from 'react';
import Header from '../template/Header';
import Fade from 'react-reveal/Fade';

import Vote from '../../utils/redux/vote_actions';

import swal from 'sweetalert';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const copyToClipboard = (text) => {
	console.log('text', text);
	var textField = document.createElement('textarea');
	textField.innerText = text;
	document.body.appendChild(textField);
	textField.select();
	document.execCommand('copy');
	textField.remove();
	swal({
		title: 'berhasil dicopy',
		icon: 'success',
		text: 'code : ' + text
	})
};

const Home = () => {
	const data = useSelector((state) => state);
	const dispatch = useDispatch()
	const history = useHistory();
	console.log(data);
	const [id, setID] = useState('');

	React.useEffect(() => {
		dispatch(Vote.getPublicRoom())
	}, [])

	return (
		<div style={{ backgroundColor: '#582245', minHeight: '100vh', position: 'relative' }}>
			<div style={{ width: '88%', margin: 'auto' }}>
				<Fade>
					<section
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							paddingTop: 25,
							marginBottom: 25
						}}
					>
						<div style={{ display: 'flex', flexDirection: 'column', color: '#fff' }}>
							<span style={{ fontSize: 28, fontWeight: 'bold' }}>Hello {data.user.displayName}</span>
							<span style={{ fontSize: 16 }}>{data.user.email}</span>
						</div>
						<div
							style={{
								width: 50,
								height: 50,
								backgroundImage: `url(${data.user.photoURL})`,
								borderRadius: '50%',
								backgroundPosition: 'center',
								backgroundSize: 'cover'
							}}
						/>
					</section>
				</Fade>

				<Link style={{
					position: 'absolute',
					backgroundColor: 'white',
					width: '95%',
					height: 120,
					right: 0,
					borderRadius: '20px 0px 0px 20px',
					marginTop: 50,
					textDecoration: 'none',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					paddingLeft: 30,
					fontWeight: 'bold',
					color: '#582245'
				}} 
					to='/diagnosa'
				>
					<div style={{ zIndex: 2 }}>
						<span>Mulai Lakukan Diagnosa</span>
						<br />
						<span>dan Selamatkan Ayam anda</span>
					</div>
					<img src={require('../../assets/img/arrow.svg')} alt="" style={{ width: 20, position: 'absolute', bottom: 10 }} />
					<img src={require('../../assets/img/ayam.png')} alt="" style={{
						width: 190,
						right: 0,
						bottom: 0,
						position: 'absolute',
						zIndex: 1
					}} />
				</Link>

				<Fade >
					<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop: 230, color: 'white', fontSize: 16 }} >
						<p style={{fontWeight: 'bold'}}>Riwayat Diagnosa Ayam Anda</p>
						<Link style={{color: 'white', textDecoration: 'none'}}>Lihat Semua</Link>
					</div>
				</Fade>
				<Fade>
					<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '40vh', color: 'white' }} >
						<img src={require('../../assets/img/ayamsedih.svg')} alt="" style={{width: 200}} />
						<p>Data Tidak ditemukan</p>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Home;
