const CHANGE_MONTH_LIST = 'CHANGE_MONTH_LIST';
const CHANGE_YEAR_LIST = 'CHANGE_YEAR_LIST';
const CHANGE_DAY_DIARY = 'CHANGE_DAY_DIARY';
const CHANGE_SEARCH_LIST = 'CHANGE_SEARCH_LIST';
const CHANGE_SETTING = 'CHANGE_SETTING';
const CHANGE_UPLOADING = 'CHANGE_UPLOADING';
const CHANGE_DELETING = 'CHANGE_DELETING';


export const changeMonthList = () => {
	return {
		type: CHANGE_MONTH_LIST,
	};
};

export const changeYearList = () => {
	return {
		type: CHANGE_YEAR_LIST,
	};
};

export const changeDayDiary = () => {
	return {
		type: CHANGE_DAY_DIARY,
	};
};

export const changeSearchList = state => {
	return {
		type: CHANGE_SEARCH_LIST,
		payload: state,
	};
};

export const changeUploading = () => {
	return {
		type: CHANGE_UPLOADING,
	};
};

export const changeDeleting = () => {
	return {
		type: CHANGE_DELETING,
	};
};

export const changeSetting = () => {
	return {
		type: CHANGE_SETTING,
	};
};

export const initialState = {
	// 데이터를 가져오는 로딩
	monthList: true,
	yearList: true,
	dayDiary: true,
	searchList: true,
	setting: true,
	// 데이터를 변경하는 로딩
	uploading: false,
	deleting: false,
};

export const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_MONTH_LIST:
			return {
				...state,
				monthList: false,
			};
		case CHANGE_YEAR_LIST:
			return {
				...state,
				yearList: false,
			};
		case CHANGE_DAY_DIARY:
			return {
				...state,
				dayDiary: !state.dayDiary,
			};
		case CHANGE_SEARCH_LIST:
			return {
				...state,
				searchList: action.payload,
			};
		case CHANGE_SETTING:
			return {
				...state,
				setting: false,
			};
		case CHANGE_UPLOADING:
			return {
				...state,
				uploading: !state.uploading,
			};
		case CHANGE_DELETING:
			return {
				...state,
				deleting: !state.deleting,
			};

		default:
			return state;
	}
};

export default loadingReducer;
