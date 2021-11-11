// initial state
const initState = {
	isAuth: false,
	user: {},
	profile: {},
	authLoad: false,
	votingRoom: [],
	vLoad: false,
	currVoting: {},
	currVotingData: [],
	notFound: true,
	xLoad: false,
	vPublic: []
};

// basic reducer
const reducer = (state = initState, action) => {
	if (action.type === 'SET_USER') {
		return {
			...state,
			user: action.value
		};
	}

	if (action.type === 'SET_VOTING') {
		return {
			...state,
			votingRoom: action.value
		};
	}
	if (action.type === 'HAPUS_VOROOM') {
		let temp = state.votingRoom;
		temp = temp.filter((d) => d.votingId !== action.value);
		return {
			...state,
			votingRoom: temp
		};
	}
	if (action.type === 'SET_CURR_VOTING') {
		// let temp = [];
		// if (state.currVotingData.length > 0) {
		// 	state.currVotingData.map((d) => {
		// 		console.log(d.email === state.user.email);
		// 		console.log();
		// 		if (d.email === state.user.email) {
		// 			temp = {
		// 				...action.value,
		// 				voteList: action.value.voteList.map((dt, i) => (i === parseInt(d.vote) ? [ ...dt, true ] : dt))
		// 			};
		// 		} else {
		// 			temp = action.value;
		// 		}
		// 	});
		// }
		// console.log(temp);

		return {
			...state,
			currVoting: action.value
		};
	}
	if (action.type === 'SET_CURR_VOTING_DATA') {
		return {
			...state,
			currVotingData: action.value
		};
	}
	if (action.type === 'SET_NOT_FOUND') {
		return {
			...state,
			notFound: action.value
		};
	}

	if (action.type === 'SET_VLOAD') {
		return {
			...state,
			vLoad: action.value
		};
	}
	if (action.type === 'SET_xLOAD') {
		return {
			...state,
			xLoad: action.value
		};
	}

	if (action.type === 'SET_AUTH') {
		return {
			...state,
			isAuth: action.value
		};
	}

	if (action.type === 'SET_ALOAD') {
		return {
			...state,
			authLoad: action.value
		};
	}

	if( action.type === 'SET_ERR') {
		return {
			...state,
			errs: action.value
		}
	}

	if(action.type === 'SET_VOTING_PUBLIC'){
		return {
			...state,
			vPublic: action.value
		}
	}

	return state;
};

export default reducer;
