const CHANGE_AUTH_LOADING = 'CHANGE_AUTH_LOADING';
const CHANGE_MONTH_LIST_LOADING = 'CHANGE_MONTH_LIST_LOADING';
const CHANGE_SETTING_LOADING = 'CHANGE_SETTING_LOADING';
const CHANGE_UPLOADING = 'CHANGE_UPLOADING';
const CHANGE_DAY_DIARY_LOADING = 'CHANGE_DAY_DIARY_LOADING';
const CHANGE_DELETING = 'CHANGE_DELETING';
const CHANGE_YEAR_LIST_LOADING = 'CHANGE_YEAR_LIST_LOADING';
const CHANGE_SEARCH_LIST_LOADING = 'CHANGE_SEARCH_LIST_LOADINg';

// 유저 인증 로딩
export const chagneAuthLoading = () => {
	return {
		type: CHANGE_AUTH_LOADING,
	};
};

// 이번달 작성한 일기 로딩
export const changeMonthListLoading = () => {
	return {
		type: CHANGE_MONTH_LIST_LOADING,
	};
};

// 세팅 로딩
export const changeSettingLoading = () => {
	return {
		type: CHANGE_SETTING_LOADING,
	};
};

// 일기 업로드 로딩
export const changeUploading = () => {
	return {
		type: CHANGE_UPLOADING,
	};
};

// 일기 보기 로딩
export const changeDayDiaryLoading = () => {
	return {
		type: CHANGE_DAY_DIARY_LOADING,
	};
};

// 일기 삭제 로딩
export const changeDeleting = () => {
	return {
		type: CHANGE_DELETING,
	};
};

// 연도별 일기장 로딩
export const changeYearListLoading = () => {
	return {
		type: CHANGE_YEAR_LIST_LOADING,
	};
};

// 일기 검색 로딩
export const changeSearchListLoading = state => {
	return {
		type: CHANGE_SEARCH_LIST_LOADING,
		payload: state,
	};
};

export const initialState = {
	authLoading: true,
	monthListLoading: true,
	settingLoading: true,
	uploading: false,
	dayDiaryLoading: true,
	deleting: false,
	yearListLoading: true,
	searchListLoading: true,
};

export const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_AUTH_LOADING:
			return {
				...state,
				authLoading: false,
			};
		case CHANGE_MONTH_LIST_LOADING:
			return {
				...state,
				monthListLoading: false,
			};
		case CHANGE_SETTING_LOADING:
			return {
				...state,
				settingLoading: false,
			};
		case CHANGE_UPLOADING:
			return {
				...state,
				uploading: !state.uploading,
			};
		case CHANGE_DAY_DIARY_LOADING:
			return {
				...state,
				dayDiaryLoading: !state.dayDiaryLoading,
			};
		case CHANGE_DELETING:
			return {
				...state,
				deleting: !state.deleting,
			};
		case CHANGE_YEAR_LIST_LOADING:
			return {
				...state,
				yearListLoading: false,
			};
		case CHANGE_SEARCH_LIST_LOADING:
			return {
				...state,
				searchListLoading: action.payload,
			};
		default:
			return state;
	}
};

export default loadingReducer;
