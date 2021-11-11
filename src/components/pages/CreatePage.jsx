import React, { useEffect } from 'react';
import Header from '../template/Header';
import Fade from 'react-reveal/Fade';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Vote from '../../utils/redux/vote_actions';
import { useState } from 'react';
import swal from 'sweetalert';

const CreatePage = () => {
	const data = useSelector((state) => state);
	const dispatch = useDispatch();
	const history = useHistory();
	const [ list, setList ] = useState([ '' ]);
	const [ nama, setnama ] = useState('');
	const [ type, setType ] = useState(0);
	const [desc, setDesc] = useState('');

	useEffect(() => {
		dispatch(Vote.getVotingRoom({ id: data.user.uid }));
	}, []);

	let addList = () => {
		if (list[list.length - 1] !== '') {
			setList([ ...list, '' ]);
		}
	};

	let minList = (i) => {
		let temp = list;
		temp = temp.filter((d, idx) => idx !== i);
		setList(temp);
	};

	let onChange = (e, i) => {
		let temp = list;
		temp = temp.map((d, idx) => (i === idx ? e.target.value : d));
		setList(temp);
	};

	let saveRuang = () => {
		swal({
			title: 'Yakin Tambah Ruang?',
			icon: 'warning',
			buttons: true,
			dangerMode: true
		}).then((willDelete) => {
			if (willDelete) {
				let isAll = true;
				list.map((d) => {
					if (d == '') {
						isAll = false;
					}
				});
				if (!isAll || nama === '') {
					swal('Harus Isi Semua Field', {
						icon: 'warning'
					});
				} else {
					swal({
						title: 'Loading..',
						icon: 'info',
						buttons: false,
						closeOnClickOutside: false
					})
					dispatch(
						Vote.addVoteRoom({
							createdBy: data.user.uid,
							voteList: list,
							votingName: nama,
							type: type,
							desc: desc,
							user: data.user.displayName
						})
					).then((res) => {
						swal('Berhasil Tambah Room!', '', 'success');
						history.push(`/voting/${res}`);
					});
				}
			}
		});
	};

	return (
		<React.Fragment>
			<Fade>
				<Header />
			</Fade>
			<div style={{ width: '95%', margin: 'auto', paddingTop: 10 }}>
				<h3>Buat Ruang Voting</h3>
				<hr />
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: 20
					}}
				>
					<label htmlFor="nama_room">Nama Room : </label>
					<input
						style={{
							width: '70%',
							height: 26,
							border: 'none',
							borderRadius: 3,
							outline: 'none',
							backgroundColor: '#e6e6e6'
						}}
						type="text"
						name=""
						id="nama_room"
						onChange={(e) => setnama(e.target.value)}
					/>
				</div>
				<div style={{margin: '20px 0px'}} >
					<strong>Tipe Voting</strong>
					<div  style={{ display:'flex', flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'center'}} >
						<div>
							<label htmlFor="public">Public</label>
							<input type="radio" id="public" checked={type === 0} onClick={()=> setType(0)} />
						</div>
						<div>
							<label htmlFor="private">Private</label>
							<input type="radio" id="private" checked={type === 1} onClick={()=> setType(1)} />
						</div>
					</div>
				</div>
				<div style={{margin: '20px 0px', display: 'flex', flexDirection: 'column'}} >
					<label htmlFor="desc">Deskripsi :</label>
					<textarea style={{height: 60}} value={desc} onChange={(e)=> setDesc(e.target.value)} name="" id="desc"  cols="15" rows="10" placeholder="Deskripsi.." ></textarea>
				</div>
				<label htmlFor="nama_room">Daftar Kandidat : </label>
				<br />
				{list.map((d, i) => (
					<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								margin: 12,
								width: '75%'
							}}
						>
							<span>{i + 1}.</span>
							<input
								type="text"
								value={d}
								onChange={(e) => onChange(e, i)}
								style={{
									width: '90%',
									height: 24,
									border: 'none',
									borderRadius: 3,
									outline: 'none',
									backgroundColor: '#e6e6e6'
								}}
							/>
						</div>
						{i === list.length - 1 ? (
							<button
								onClick={() => addList()}
								style={{
									width: 30,
									height: 30,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									borderRadius: '50%',
									borderStyle: 'none',
									backgroundColor: '#68C93E',
									outline: 'none'
								}}
							>
								{' '}
								<img src={require('../../assets/img/plus.svg')} alt="" height="20" />{' '}
							</button>
						) : (
							<button
								style={{
									width: 30,
									height: 30,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									borderRadius: '50%',
									borderStyle: 'none',
									backgroundColor: '#68C93E',
									outline: 'none'
								}}
								onClick={() => minList(i)}
							>
								<img src={require('../../assets/img/minus.svg')} alt="" height="20" />
							</button>
						)}
					</div>
				))}

				<button
					style={{
						width: 120,
						height: 30,
						borderRadius: 5,
						backgroundColor: '#68C93E',
						borderStyle: 'none',
						outline: 'none',
						fontWeight: 'bold',
						color: 'white'
					}}
					onClick={() => saveRuang()}
				>
					Buat Ruang
				</button>
			</div>
		</React.Fragment>
	);
};

export default CreatePage;
