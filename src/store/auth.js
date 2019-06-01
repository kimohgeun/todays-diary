import firebase from '../config/firebase';
import { chagneAuthLoading } from './loading';

const GOOGLE_LOGIN = 'GOOGLE_LOGIN';
const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';
const GET_AUTH_FAIL = 'GET_AUTH_FAIL';
const LOGOUT = 'LOGOUT';

// 구글 로그인
export const googleLogin = () => dispatch => {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(res => {
			dispatch({
				type: GOOGLE_LOGIN,
				payload: res.user,
			});
		})
		.then(() => dispatch(chagneAuthLoading()));
};

// 페이스북 로그인
export const facebookLogin = () => dispatch => {
	const provider = new firebase.auth.FacebookAuthProvider();
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(res => {
			dispatch({
				type: FACEBOOK_LOGIN,
				payload: res.user,
			});
		})
		.then(() => dispatch(chagneAuthLoading()));
};

// 유저 인증
export const getAuth = () => dispatch => {
	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			// 인증 성공
			dispatch({
				type: GET_AUTH_SUCCESS,
				payload: user,
			});
			dispatch(chagneAuthLoading());
		} else {
			// 인증 실패
			dispatch({
				type: GET_AUTH_FAIL,
			});
			dispatch(chagneAuthLoading());
		}
	});
};

// 로그아웃
export const logout = () => dispatch => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			dispatch({
				type: LOGOUT,
			});
		});
};

const initialState = {
	isAuthenticated: false,
	user: null,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case GOOGLE_LOGIN:
		case FACEBOOK_LOGIN:
		case GET_AUTH_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};
		case GET_AUTH_FAIL:
		case LOGOUT:
			return {
				...state,
				user: null,
				isAuthenticated: false,
			};
		default:
			return state;
	}
};

export default authReducer;
