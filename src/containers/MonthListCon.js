import React, { useState, useEffect } from 'react';
import MonthList from '../components/MonthList';
import { connect } from 'react-redux';
import { getMonthDiaries } from '../store/diary';

const MonthListCon = ({ user, getMonthDiaries, monthDiaries }) => {

	const date = new Date();
	const month = date.getMonth() + 1;

	useEffect(() => {
		getMonthDiaries(user.uid);
	}, []);

	return <MonthList month={month} monthDiaries={monthDiaries} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	monthDiaries: state.diary.monthDiaries.sort(),
});

export default connect(
	mapStateToProps,
	{ getMonthDiaries }
)(MonthListCon);
