import React, { useEffect } from 'react';
import MonthList from '../components/MonthList';
import { connect } from 'react-redux';
import { getMonthList } from '../store/diary';

const MonthListCon = ({ user, loading, monthList, getMonthList }) => {
	// 이번달 날짜 가져오기
	const date = new Date();
	const month = date.getMonth() + 1;

	// 이번달 일기목록 가져오기
	useEffect(() => {
		getMonthList(user.uid);
	}, []);

	return <MonthList month={month} monthList={monthList} loading={loading} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	monthList: state.diary.monthList.sort(),
	loading: state.loading.monthList,
});

export default connect(
	mapStateToProps,
	{ getMonthList }
)(MonthListCon);
