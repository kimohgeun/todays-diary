import firebase from '../config/firebase';
import {
	changeMonthListLoading,
	changeDayDiaryLoading,
	changeUploading,
	changeDeleting,
	changeYearListLoading,
	changeSearchListLoading,
} from './loading';

const GET_MONTH_LIST = 'GET_MONTH_LIST';
const CHANGE_INPUT = 'CHANGE_INPUT';
const CHOOSE_WEATHER = 'CHOOSE_WEATHER';
const ADD_TIME = 'ADD_TIME';
const WRITE_DIARY = 'WRITE_DIARY';
const INIT_STATE = 'INIT_STATE';
const GET_YEAR_LIST = 'GET_YEAR_LIST';
const GET_SEARCH_LIST = 'GET_SEARCH_LIST';
const GET_DAY_DIARY = 'GET_DAY_DIARY';
const UPDATE_DIARY = 'UPDATE_DIARY';
const DELETE_DIARY = 'DELETE_DIARY';

// 이번달 일기 리스트 가져오기
export const getMonthList = uid => dispatch => {
	const monthList = [];
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	firebase
		.firestore()
		.collection('diary')
		.doc('uid')
		.collection(uid)
		.where('year', '==', year.toString())
		.where('month', '==', month.toString())
		.get()
		.then(docs => {
			docs.forEach(doc => {
				monthList.push({
					id: doc.id,
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
				type: GET_MONTH_LIST,
				payload: monthList,
			})
		)
		.then(() => dispatch(changeMonthListLoading()));
};

// 텍스트 입력
export const changeInput = input => {
	return {
		type: CHANGE_INPUT,
		payload: input,
	};
};

// 날씨 선택
export const chooseWeather = weather => {
	return {
		type: CHOOSE_WEATHER,
		payload: weather,
	};
};

// 시간 추가
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
	const time = `${str} ${hour > 9 ? hour : `0${hour}`}:${minute > 9 ? minute : `0${minute}`}`;
	return {
		type: ADD_TIME,
		payload: time,
	};
};

// 새 일기 작성
export const writeDiary = (uid, data) => dispatch => {
	firebase
		.firestore()
		.collection('diary')
		.doc('uid')
		.collection(uid)
		.doc(`${data.year}-${data.month}-${data.day}`)
		.set(data)
		.then(() =>
			dispatch({
				type: WRITE_DIARY,
				payload: data,
			})
		)
		.then(() => dispatch(changeUploading()));
};

// 상태 초기화
export const initState = () => {
	return {
		type: INIT_STATE,
	};
};

// 연도별 리스트 가져오기
export const getYearList = uid => dispatch => {
	const yearList = [];
	firebase
		.firestore()
		.collection('diary')
		.doc('uid')
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
		)
		.then(() => dispatch(changeYearListLoading()));
};

// 일기 검색
export const getSearchList = (uid, year, month) => dispatch => {
	const searchList = [];
	firebase
		.firestore()
		.collection('diary')
		.doc('uid')
		.collection(uid)
		.where('year', '==', year)
		.where('month', '==', month)
		.get()
		.then(docs => {
			docs.forEach(doc => {
				searchList.push({
					id: doc.id,
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
		)
		.then(() => dispatch(changeSearchListLoading(false)));
};

// 작성된 일기 가져오기
export const getDayDiary = (uid, year, month, day) => dispatch => {
	const dayDiary = [];
	firebase
		.firestore()
		.collection('diary')
		.doc('uid')
		.collection(uid)
		.where('year', '==', year)
		.where('month', '==', month)
		.where('day', '==', day)
		.get()
		.then(docs => {
			docs.forEach(doc => {
				dayDiary.push({
					id: doc.id,
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
				type: GET_DAY_DIARY,
				payload: dayDiary,
			})
		)
		.then(() => dispatch(changeDayDiaryLoading()));
};

// 일기 수정하기
export const updateDiary = (uid, data) => dispatch => {
	firebase
		.firestore()
		.collection('diary')
		.doc('uid')
		.collection(uid)
		.doc(data.id)
		.set(data)
		.then(() =>
			dispatch({
				type: UPDATE_DIARY,
				payload: {
					id: data.id,
					data: data,
					uploaded: true,
				},
			})
		)
		.then(() => dispatch(changeUploading()));
};

// 일기 삭제하기
export const deleteDiary = (uid, id) => dispatch => {
	firebase
		.firestore()
		.collection('diary')
		.doc('uid')
		.collection(uid)
		.doc(id)
		.delete()
		.then(() =>
			dispatch({
				type: DELETE_DIARY,
				payload: id,
			})
		)
		.then(() => dispatch(changeDeleting()));
};

export const initialState = {
	input: '',
	weather: '',
	uploaded: false,
	updated: false,
	deleted: false,
	monthList: [],
	yearList: [],
	searchList: [],
	dayDiary: [],
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
			const data = action.payload;
			return {
				...state,
				monthList: state.monthList.concat({
					id: `${data.year}-${data.month}-${data.day}`,
					...data,
				}),
				uploaded: true,
				yearList: Array.from(new Set(state.yearList.concat(action.payload.year))),
			};
		case INIT_STATE:
			return {
				...state,
				input: '',
				weather: '',
				uploaded: false,
				updated: false,
				deleted: false,
				dayDiary: [],
			};
		case GET_MONTH_LIST:
			return {
				...state,
				monthList: action.payload,
				loading: {
					...state.loading,
					getMonthList: false,
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
		case GET_DAY_DIARY:
			return {
				...state,
				input: action.payload[0].text.replace(/<br\s*\/?>/gm, '\n'),
				weather: action.payload[0].weather,
				dayDiary: action.payload,
				loading: {
					...state.loading,
					getDayDiary: false,
				},
			};
		case UPDATE_DIARY:
			return {
				...state,
				monthList: state.monthList.map(item => (action.payload.id === item.id ? action.payload.data : item)),
				searchList: state.searchList.map(item => (action.payload.id === item.id ? action.payload.data : item)),
				updated: true,
			};
		case DELETE_DIARY:
			return {
				...state,
				monthList: state.monthList.filter(item => action.payload.id === item.id),
				searchList: state.searchList.filter(item => action.payload.id === item.id),
				deleted: true,
			};
		default:
			return state;
	}
};

export default authReducer;
