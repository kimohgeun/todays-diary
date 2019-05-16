import firebase from '../config/firebase';

const CHANGE_INPUT = 'CHANGE_INPUT';
const CHOOSE_WEATHER = 'CHOOSE_WEATHER';
const ADD_TIME = 'ADD_TIME';
const WRITE_DIARY = 'WRITE_DIARY';
const INIT_STATE = 'INIT_STATE';

export const changeInput = input => {
	return {
		type: CHANGE_INPUT,
		payload: input,
	};
};

export const chooseWeather = weather => {
	return {
		type: CHOOSE_WEATHER,
		payload: weather,
	};
};

export const addTime = () => {
	const date = new Date();
	let hour = date.getHours();
	const minute = date.getMinutes();
	let str = '';
	if (hour > 12) {
		str = '오후';
		hour = hour % 12;
	} else {
		str = '오전';
	}
	const time = `${str} ${hour}:${minute}`;
	return {
		type: ADD_TIME,
		payload: time,
	};
};

export const writeDiary = (uid, data) => dispatch => {
	firebase
		.firestore()
		.collection('diary')
		.doc(uid)
		.collection(data.year)
		.doc(data.month)
		.collection(data.day)
		.add(data)
		.then(() =>
			dispatch({
				type: WRITE_DIARY,
				payload: {
					data: data,
					uploaded: true,
				},
			})
		);
};

export const initState = () => {
	return {
		type: INIT_STATE,
	};
};

const initialState = {
	input: '',
	weather: '',
	diaries: [],
	uploaded: false,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_INPUT:
			return {
				...state,
				input: action.payload,
			};
		case CHOOSE_WEATHER:
			return {
				...state,
				weather: action.payload,
			};
		case ADD_TIME:
			return {
				...state,
				input: state.input + action.payload,
			};
		case WRITE_DIARY:
			return {
				...state,
				diaries: state.diaries.concat(action.payload.data),
				uploaded: action.payload.uploaded,
			};
		case INIT_STATE:
			return {
				...state,
				input: '',
				weather: '',
				uploaded: false,
			};
		default:
			return state;
	}
};

export default authReducer;
