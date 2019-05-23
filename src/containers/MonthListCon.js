import React, { useEffect } from 'react';
import MonthList from '../components/MonthList';
import { connect } from 'react-redux';
import { getMonthDiaries } from '../store/diary';

const MonthListCon = ({ user, getMonthDiaries, monthDiaries, loading }) => {
	const date = new Date();
	const month = date.getMonth() + 1;

	useEffect(() => {
		getMonthDiaries(user.uid);
	}, []);

	return <MonthList month={month} monthDiaries={monthDiaries} loading={loading} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	monthDiaries: state.diary.monthDiaries.sort(),
	loading: state.diary.loading.getMonthDiaries,
});

export default connect(
	mapStateToProps,
	{ getMonthDiaries }
)(MonthListCon);
