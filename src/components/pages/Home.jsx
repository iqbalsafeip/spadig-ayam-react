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
		icon : 'success',
		text: 'code : ' + text
	})
};

const Home = () => {
	const data = useSelector((state) => state);
	const dispatch = useDispatch()
	const history = useHistory();
	console.log(data);
	const [ id, setID ] = useState('');

	React.useEffect(()=> {
		dispatch(Vote.getPublicRoom())
	}, [])

	return (
		<React.Fragment>
			<Fade>
				<Header />
			</Fade>
			<div style={{ width: '95%', margin: 'auto' }}>
				<Fade>
					<section
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginTop: 25,
							marginBottom: 25
						}}
					>
						<div style={{ display: 'flex', flexDirection: 'column', color: '#68C93E' }}>
							<span style={{ fontSize: 23, fontWeight: 'bold' }}>Hello {data.user.displayName}</span>
							<span>{data.user.email}</span>
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
				<Fade>
					<div style={{ height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
						<div>
							<span style={{ fontSize: 24, fontWeight: 'bold', color: '#68C93E' }}>
								Sudah Melakukan Voting Hari ini ?
							</span>
							<br />
							<span style={{ fontSize: 12, fontWeight: 'bold', color: '#68C93E' }}>
								Buat Ruang Voting Mu Sendiri Dan Share Kepada Teman Mu!
							</span>
						</div>
						<div
							style={{
								width: '100%',
								height: 200,
								backgroundColor: '#68C93E',
								boxShadow: '0 -2px 10px 0 rgba(0,0,0,.1)',
								borderRadius: 10,
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								marginTop: 10
							}}
						>
							<h2 style={{ fontWeight: 'bold', color: 'white' }}>Masuk Ruang Voting</h2>
							<div
								style={{
									backgroundColor: 'white',
									borderRadius: 30,
									width: '90%',
									height: 45,
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
									paddingLeft: 10,
									paddingRight: 10
								}}
							>
								<input
									type="text"
									style={{
										width: '85%',
										outline: 'none',
										border: 'none',
										fontSize: 18
									}}
									placeholder="Masukan ID Room"
									value={id}
									onChange={(t) => setID(t.target.value)}
								/>
								<button
									onClick={() => history.push(`/voting/${id}`)}
									style={{ border: 'none', outline: 'none', backgroundColor: 'white' }}
								>
									<img src={require('../../assets/img/search.svg')} alt="" />
								</button>
							</div>
						</div>
					</div>
				</Fade>
				<Fade>
					<h2>Latest Voting</h2>
					<div>
						{data.vLoad ? <p>Loading...</p> : <div>
							{data.vPublic.map((d,i)=>(
								<Fade key={i}>
								<div
									style={{
										width: '100%',
										minHeight: 100,
										borderRadius: 20,
										boxShadow: '0 -2px 10px 0 rgba(0,0,0,.1)',
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
										boxSizing: 'border-box',
										padding: 15,
										alignItems: 'center',
										marginTop: 13,
										marginBottom: 13
									}}
								>
									<div>
										<span style={{ fontWeight: 'bold' }}>{d.votingName}</span>
										<p style={{color: '#b8b8b8'}} >{d.desc}</p>
										<small>dibuat oleh {d.user}</small>
									</div>
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											flexDirection: 'column',
										}}
									>

										<Link
											to={`/voting/${d.votingId}`}
											style={{
												display: 'flex',
												width: 100,
												height: 25,
												textDecoration: 'none',
												backgroundColor: '#68C93E',
												color: 'white',
												fontWeight: 'bold',
												borderRadius: 5,
												marginBottom: 5,
												fontSize: 10,
												justifyContent: 'center',
												alignItems: 'center',
											}}
										>
											Masuk Ruang
										</Link>
										
									</div>
								</div>
							</Fade>
							))}
						
						
						</div>}
					</div>
				</Fade>
			</div>
		</React.Fragment>
	);
};

export default Home;
