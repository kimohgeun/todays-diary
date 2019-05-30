import firebase from '../config/firebase';

const CHANGE_FONT = 'CHANGE_COLOR';
const CHANGE_MODAL_COLOR = 'CHANGE_MODAL_COLOR';

export const getSetting = uid => dispatch => {
	const setting = [];
	firebase
		.firestore()
		.collection('setting')
		.doc('uid')
		.collection(uid)
		.get()
		.then(docs => {
			docs.forEach(doc => {
				setting.push(doc.data());
			});
		})
		.then(() => {
			setting.forEach(item => {
				if (item.hasOwnProperty('font')) {
					dispatch({
						type: CHANGE_FONT,
						payload: item.font,
					});
				} else if (item.hasOwnProperty('color')) {
					dispatch({
						type: CHANGE_MODAL_COLOR,
						payload: item.color,
					});
				}
			});
		});
};

export const changeFont = (uid, font) => dispatch => {
	firebase
		.firestore()
		.collection('setting')
		.doc('uid')
		.collection(uid)
		.doc('font')
		.set({ font: font })
		.then(() =>
			dispatch({
				type: CHANGE_FONT,
				payload: font,
			})
		);
};

export const changeModalColor = (uid, color) => dispatch => {
	firebase
		.firestore()
		.collection('setting')
		.doc('uid')
		.collection(uid)
		.doc('color')
		.set({ color: color })
		.then(() =>
			dispatch({
				type: CHANGE_MODAL_COLOR,
				payload: color,
			})
		);
};

export const initialState = {
	font: `'Nanum Gothic', sans-serif`,
	color: '#fafafa',
};

export const settingReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_FONT:
			return {
				...state,
				font: action.payload,
			};
		case CHANGE_MODAL_COLOR:
			return {
				...state,
				color: action.payload,
			};
		default:
			return state;
	}
};

export default settingReducer;
