import React, { useEffect } from 'react';
import YearList from '../components/YearList';
import { connect } from 'react-redux';
import { getYearList } from '../store/diary';
import { sortUpList, sortDownList } from '../store/diary';

const YearListCon = ({ user, yearList, loading, font, getYearList, sortUpList, sortDownList }) => {
	// 연도별 일기장 가져오기
	useEffect(() => {
		getYearList(user.uid);
		onSortDown();
	}, []);

	// 오름차순 정렬
	const onSortUp = () => {
		sortUpList('yearList');
	};
	// 내림차순 정렬
	const onSortDown = () => {
		sortDownList('yearList');
	};

	return <YearList yearList={yearList} loading={loading} font={font} onSortUp={onSortUp} onSortDown={onSortDown} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	yearList: state.diary.yearList,
	loading: state.loading.yearListLoading,
	font: state.setting.font,
});

export default connect(
	mapStateToProps,
	{
		getYearList,
		sortUpList,
		sortDownList,
	}
)(YearListCon);
