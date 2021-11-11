import { firebase, app } from '../firebase/index';

class User {
	Provider = null;
	constructor() {
		this.Provider = new firebase.auth.GoogleAuthProvider();
	}

	Login = () => (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(this.Provider)
			.then((result) => {
				dispatch({ type: 'SET_USER', value: result.additionalUserInfo.profile });
				dispatch({ type: 'SET_PROFILE', value: result.additionalUserInfo.profile });
				dispatch({ type: 'SET_AUTH', value: true });
			})
			.catch((err) => {});
	};

	isLogin = () => (dispatch) => {
		dispatch({ type: 'SET_ALOAD', value: true });
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				const { displayName, photoURL, email, uid } = user;
				dispatch({ type: 'SET_USER', value: { displayName, photoURL, email, uid } });
				dispatch({ type: 'SET_PROFILE', value: { displayName, photoURL, email, uid } });
				dispatch({ type: 'SET_AUTH', value: true });
			}
			dispatch({ type: 'SET_ALOAD', value: false });
		});
	};

	Logout = () => (dispatch) => {
		firebase
			.auth()
			.signOut()
			.then(function() {
				dispatch({ type: 'SET_AUTH', value: false });
				dispatch({ type: 'SET_USER', value: {} });
			})
			.catch((err) => {});
	};
}

export default new User();
