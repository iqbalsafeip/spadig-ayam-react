import React, { useEffect, useState } from 'react';
import Header from '../template/Header';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Link, useHistory } from 'react-router-dom';
import User from '../../utils/redux/user_actions';
import Vote from '../../utils/redux/vote_actions';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import swal from 'sweetalert';

const VotingRoom = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const data = useSelector((state) => state);
	const [ selected, setSelected ] = useState(-1);
	let params = history.location.pathname.split('/');
	useEffect(() => {
		dispatch(Vote.getVotingData({ idRoom: params[2] }));
		return () => {
			dispatch({ type: 'SET_CURR_VOTING_DATA', value: [] });
			dispatch({ type: 'SET_CURR_VOTING', value: {} });
		};
	}, []);
	useEffect(
		() => {
			dispatch(Vote.getVotingData({ idRoom: params[2] }));
		},
		[ selected ]
	);

	useEffect(
		() => {
			const { currVotingData, user } = data;
			currVotingData.map((d) => {
				if (d.email === user.email) {
					setSelected(d.voted);
				}
			});
		},
		[ selected, data ]
	);

	let onClick = (id) => {
		const { currVoting, user } = data;
		swal({
			title: 'Loading..',
			icon: 'info',
			buttons: false,
			closeOnClickOutside: false
		})
		dispatch(Vote.doVote({ email: user.email, voted: id, votingRoom: currVoting.votingId }))
			.then((res) => {
				swal('Berhasil Melakukan Voting', '', 'success');
				setSelected(id);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<React.Fragment>
			<Fade>
				<Header />
			</Fade>
			<Fade>
				<h2 style={{ textAlign: 'center' }}>{data.currVoting && data.currVoting.votingName}</h2>
			</Fade>
			<Zoom cascade>
				<div>
					{data.currVoting && data.currVoting.voteList && data.currVoting.voteList.length > 0 ? (
						data.currVoting.voteList.map((d, i) => {
							return (
								<React.Fragment key={i}>
									<button
										className="btnVote"
										disabled={selected > -1 ? true : false}
										style={{
											display: 'flex',
											flexDirection: 'row',
											justifyContent: 'center',
											alignItems: 'center',
											alignSelf: 'center',
											width: '95%',
											borderRadius: 10,
											height: 100,
											fontWeight: 'bold',
											boxShadow: '0 -2px 10px 0 rgba(0,0,0,.1)',
											margin: 'auto',
											marginTop: 15,
											marginBottom: 15,
											backgroundColor: `${parseInt(selected) === i ? '#69C93F' : 'white'}`,
											borderStyle: 'none',
											outline: 'none'
										}}
										onClick={() => onClick(i)}
									>
										<h3>{d}</h3>
									</button>
									{selected > -1 ? (
										<div
											style={{
												display: 'flex',
												flexDirection: 'row',
												justifyContent: 'center',
												alignItems: 'center',
												width: '95%'
											}}
										>
											<progress
												value={data.currVotingData.filter((d) => d.voted === i).length}
												max={data.currVotingData.length}
												style={{ width: '90%', margin: 'auto', height: 25 }}
											/>
											<span>{data.currVotingData.filter((d) => d.voted === i).length}</span>
										</div>
									) : null}
								</React.Fragment>
							);
						})
					) : <p style={{textAlign: 'center'}} >Loading...</p>}
				</div>
			</Zoom>
		</React.Fragment>
	);
};

export default VotingRoom;
