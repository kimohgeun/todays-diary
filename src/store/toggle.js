const CHANGE_WRITE_TOGGLE = 'CHANGE_WRITE_TOGGLE';
const CHANGE_READ_TOGGLE = 'CHANGE_READ_TOGGLE';
const CHANGE_NOTIFICATION_TOGGLE = 'CHANGE_NOTIFICATION_TOGGLE';
const CHANGE_DELETE_TOGGLE = 'CHANGE_DELETE_TOGGLE';

export const changeWriteToggle = () => {
	return {
		type: CHANGE_WRITE_TOGGLE,
	};
};

export const changeReadToggle = () => {
	return {
		type: CHANGE_READ_TOGGLE,
	};
};

export const changeNotificationToggle = () => {
	return {
		type: CHANGE_NOTIFICATION_TOGGLE,
	};
};

export const chnageDeleteToggle = () => {
	return {
		type: CHANGE_DELETE_TOGGLE,
	};
};

export const initialState = {
	writeToggle: false,
	readToggle: false,
	notificationToggle: false,
	deleteToggle: false,
};

export const toggleReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_WRITE_TOGGLE:
			return {
				...state,
				writeToggle: !state.writeToggle,
			};
		case CHANGE_READ_TOGGLE:
			return {
				...state,
				readToggle: !state.readToggle,
			};
		case CHANGE_NOTIFICATION_TOGGLE:
			return {
				...state,
				notificationToggle: !state.notificationToggle,
			};
		case CHANGE_DELETE_TOGGLE:
			return {
				...state,
				deleteToggle: !state.deleteToggle,
			};
		default:
			return state;
	}
};

export default toggleReducer;
