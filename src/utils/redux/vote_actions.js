import { firebase, app } from '../firebase/index';

import shortid from 'shortid';

class Vote {
	db = null;
	constructor() {
		this.db = firebase.firestore();
	}

	getVotingRoom = (data) => (dispatch) => {
		dispatch({ type: 'SET_VLOAD', value: true });
		let citiesRef = this.db.collection('votingRoom');
		let query = citiesRef
			.where('createdBy', '==', data.id)
			.get()
			.then((snapshot) => {
				let data = [];
				snapshot.forEach((doc) => {
					data.push(doc.data());
				});
				console.log(data);
				dispatch({ type: 'SET_VOTING', value: data });
				dispatch({ type: 'SET_VLOAD', value: false });
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});
	};

	getPublicRoom = (data) => (dispatch) => {
		dispatch({ type: 'SET_VLOAD', value: true });
		let citiesRef = this.db.collection('votingRoom');
		let query = citiesRef
			.where('type', '==', 0)
			.limit(3)
			.orderBy('date', 'desc')
			.get()
			.then((snapshot) => {
				let data = [];
				snapshot.forEach((doc) => {
					data.push(doc.data());
				});
				console.log(data);
				dispatch({ type: 'SET_VOTING_PUBLIC', value: data });
				dispatch({ type: 'SET_VLOAD', value: false });
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});
	};

	doVote = (data) => (dispatch) => {
		return new Promise((resolve, reject) => {
			this.db
				.collection('votingData')
				.add({
					email: data.email,
					voted: data.voted,
					votingRoom: data.votingRoom
				})
				.then(function(docRef) {
					resolve(docRef);
				})
				.catch(function(error) {
					reject(error);
				});
		});
	};

	addVoteRoom = (data) => (dispatch) => {
		return new Promise((resolve, reject) => {
			let id = shortid.generate();
			this.db
				.collection('votingRoom')
				.add({
					createdBy: data.createdBy,
					voteList: data.voteList,
					votingId: id,
					votingName: data.votingName,
					type: data.type,
					desc: data.desc,
					user: data.user,
					date: new Date()
				})
				.then(function(docRef) {
					resolve(id);
				})
				.catch(function(error) {
					reject(error);
				});
		});
	};

	removeRoom = (data) => (dispatch) => {
		return new Promise((resolve, reject) => {
			let citiesRef = this.db.collection('votingRoom');
			let query = citiesRef
				.where('votingId', '==', data.idRoom)
				.get()
				.then((snapshot) => {
					snapshot.forEach(function(doc) {
						doc.ref.delete();
					});
					dispatch({ type: 'HAPUS_VOROOM', value: data.idRoom });
					resolve(true);
				})
				.catch((err) => {
					reject();
				});
		});
	};

	getVotingData = (data) => (dispatch) => {
		dispatch({ type: 'SET_xLOAD', value: true });
		let citiesRef = this.db.collection('votingRoom');
		let query = citiesRef
			.where('votingId', '==', data.idRoom)
			.get()
			.then((snapshot) => {
				let data1 = [];
				snapshot.forEach((doc) => {
					data1.push(doc.data());
				});
				if (data1.length === 0) {
					dispatch({ type: 'SET_NOT_FOUND', value: false });
					dispatch({ type: 'SET_xLOAD', value: false });
				}
				console.log(data1);
				let votingDataRef = firebase.firestore().collection('votingData');
				let query = votingDataRef
					.where('votingRoom', '==', data.idRoom)
					.get()
					.then((snapshot) => {
						let data2 = [];
						snapshot.forEach((doc) => {
							data2.push(doc.data());
						});
						console.log(data2);

						dispatch({ type: 'SET_CURR_VOTING_DATA', value: data2 });
						dispatch({ type: 'SET_xLOAD', value: false });
						dispatch({ type: 'SET_CURR_VOTING', value: data1[0] });
					})
					.catch((err) => {
						dispatch({ type: 'SET_CURR_VOTING', value: data1[0] });
						dispatch({ type: 'SET_xLOAD', value: false });
					});
			})
			.catch((err) => {
				dispatch({ type: 'SET_xLOAD', value: false });
				dispatch({ type: 'SET_NOT_FOUND', value: false });
			});
	};
}

export default new Vote();
