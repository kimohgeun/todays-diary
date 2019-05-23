import firebase from '../config/firebase';

const CHANGE_INPUT = 'CHANGE_INPUT';
const CHOOSE_WEATHER = 'CHOOSE_WEATHER';
const ADD_TIME = 'ADD_TIME';
const WRITE_DIARY = 'WRITE_DIARY';
const INIT_STATE = 'INIT_STATE';
const GET_MONTH_DIARIES = 'GET_MONTH_DIARIES';
const GET_YEAR_LIST = 'GET_YEAR_LIST';
const GET_SEARCH_LIST = 'GET_SEARCH_LIST';

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
		.collection(uid)
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

export const getMonthDiaries = uid => dispatch => {
	const monthDiaries = [];
	const date = new Date();
	const month = date.getMonth() + 1;
	firebase
		.firestore()
		.collection(uid)
		.where('month', '==', month.toString())
		.get()
		.then(docs => {
			docs.forEach(doc => {
				monthDiaries.push({
					id: doc.data().id,
					year: doc.data().year,
					month: doc.data().month,
					day: doc.data().day,
					dayOfWeek: doc.data().dayOfWeek,
					weather: doc.data().weather,
					text: doc.data().text,
				});
			});
		})
		.then(() =>
			dispatch({
				type: GET_MONTH_DIARIES,
				payload: monthDiaries,
			})
		);
};

export const getYearList = uid => dispatch => {
	const yearList = [];
	firebase
		.firestore()
		.collection(uid)
		.get()
		.then(docs => {
			docs.forEach(doc => {
				yearList.push(doc.data().year);
			});
		})
		.then(() =>
			dispatch({
				type: GET_YEAR_LIST,
				payload: Array.from(new Set(yearList)),
			})
		);
};

export const getSearchList = (uid, year, month) => dispatch => {
	const searchList = [];
	firebase
		.firestore()
		.collection(uid)
		.where('year', '==', year)
		.where('month', '==', month)
		.get()
		.then(docs => {
			docs.forEach(doc => {
				searchList.push({
					id: doc.data().id,
					year: doc.data().year,
					month: doc.data().month,
					day: doc.data().day,
					dayOfWeek: doc.data().dayOfWeek,
					weather: doc.data().weather,
					text: doc.data().text,
				});
			});
		})
		.then(() =>
			dispatch({
				type: GET_SEARCH_LIST,
				payload: searchList,
			})
		);
};

export const initialState = {
	input: '',
	weather: '',
	uploaded: false,
	monthDiaries: [],
	yearList: [],
	searchList: [],
	loading: {
		getMonthDiaries: true,
		getYearList: true,
		getSearchList: true,
	},
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
				monthDiaries: state.monthDiaries.concat(action.payload.data),
				uploaded: action.payload.uploaded,
				yearList: Array.from(new Set(state.yearList.concat(action.payload.data.year))),
			};
		case INIT_STATE:
			return {
				...state,
				input: '',
				weather: '',
				uploaded: false,
				loading: {
					...state.loading,
					getMonthList: true,
				},
				monthList: [],
			};
		case GET_MONTH_DIARIES:
			return {
				...state,
				monthDiaries: action.payload,
				loading: {
					...state.loading,
					getMonthDiaries: false,
				},
			};
		case GET_YEAR_LIST:
			return {
				...state,
				yearList: action.payload,
				loading: {
					...state.loading,
					getYearList: false,
				},
			};
		case GET_SEARCH_LIST:
			return {
				...state,
				searchList: action.payload,
				loading: {
					...state.loading,
					getSearchList: false,
				},
			};
		default:
			return state;
	}
};

export default authReducer;
