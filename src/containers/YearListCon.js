import React, { useEffect } from 'react';
import YearList from '../components/YearList';
import { connect } from 'react-redux';
import { getYearList } from '../store/diary';

const YearListCon = ({ user, getYearList, yearList, loading }) => {
	// 연도별 일기장 가져오기
	useEffect(() => {
		getYearList(user.uid);
	}, []);

	return <YearList yearList={yearList} loading={loading} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	yearList: state.diary.yearList,
	loading: state.loading.yearList,
});

export default connect(
	mapStateToProps,
	{ getYearList }
)(YearListCon);
