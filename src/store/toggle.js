const CHANGE_WRITE_TOGGLE = 'CHANGE_WRITE_TOGGLE';
const CHANGE_READ_TOGGLE = 'CHANGE_READ_TOGGLE';

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

export const initialState = {
	writeToggle: false,
	readToggle: false,
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
		default:
			return state;
	}
};

export default toggleReducer;
