import React, { useEffect } from 'react';
import Header from '../template/Header';
import Fade from 'react-reveal/Fade';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Vote from '../../utils/redux/vote_actions';
import swal from 'sweetalert';

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

const VotingList = () => {
	const data = useSelector((state) => state);
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {
		dispatch(Vote.getVotingRoom({ id: data.user.uid }));
	}, []);

	let hapusRoom = (id) => {
		swal({
			title: 'Yakin Hapus Ruang?',
			icon: 'warning',
			buttons: true,
			dangerMode: true
		}).then((willDelete) => {
			if (willDelete) {
				swal({
					title: 'Loading..',
					icon: 'info',
					buttons: false,
					closeOnClickOutside: false
				})
				dispatch(
					Vote.removeRoom({
						idRoom: id
					})
				).then((res) => {
					swal('Berhasil Hapus Room!', '', 'success');
				});
			}
		});
	};

	return (
		<React.Fragment>
			<Fade>
				<Header />
			</Fade>
			<div style={{ width: '95%', margin: 'auto', paddingTop: 20 }}>
				<Fade>
					<Link
						to="/voting/create"
						style={{
							width: '100%',
							height: 40,
							backgroundColor: '#68C93E',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							boxShadow: '0 -2px 10px 0 rgba(0,0,0,.1)',
							borderRadius: 10,
							color: 'white',
							fontWeight: 'bold',
							textDecoration: 'none'
						}}
					>
						Buat Ruang Voting <img src={require('../../assets/img/plus.svg')} alt="" />
					</Link>
				</Fade>
				{data.vLoad ? (
					<p>Loading...</p>
				) : data.votingRoom.length > 0 ? (
					data.votingRoom.map((d, i) => {
						return (
							<Fade key={i}>
								<div
									style={{
										width: '100%',
										height: 100,
										borderRadius: 20,
										boxShadow: '0 -2px 10px 0 rgba(0,0,0,.1)',
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
										boxSizing: 'border-box',
										paddingLeft: 10,
										paddingRight: 10,
										alignItems: 'center',
										marginTop: 13,
										marginBottom: 13
									}}
								>
									<div>
										<span style={{ fontWeight: 'bold' }}>{d.votingName}</span>
										<br />
										<span>
											ID : {d.votingId}{' '}
											<button onClick={() => copyToClipboard(d.votingId)} style={{border: 'none', borderRadius: 5, padding: 5, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
												<img
													src={require('../../assets/img/clipboard.svg')}
													alt=""
													height="18"
												/>
												Copy to clipboard
											</button>
										</span>
									</div>
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											flexDirection: 'column'
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
												alignItems: 'center'
											}}
										>
											Masuk Ruang
										</Link>
										<button
											style={{
												width: 100,
												height: 25,
												backgroundColor: '#c40000',
												color: 'white',
												textAlign: 'center',
												borderRadius: 5,
												fontWeight: 'bold',
												outline: 'none',
												borderStyle: 'none',
												fontSize: 10
											}}
											onClick={() => hapusRoom(d.votingId)}
										>
											Hapus Ruang
										</button>
									</div>
								</div>
							</Fade>
						);
					})
				) : (
					<p>Tidak Punya Ruang Voting</p>
				)}
			</div>
		</React.Fragment>
	);
};

export default VotingList;
