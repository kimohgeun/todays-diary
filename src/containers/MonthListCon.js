import React, { useState, useEffect } from 'react';
import MonthList from '../components/MonthList';
import { connect } from 'react-redux';
import { getMonthDiaries } from '../store/diary';

const MonthListCon = ({ user, getMonthDiaries, monthDiaries }) => {
	const [month, setMonth] = useState(null);

	// 날짜 가져오기
	const onSetMonth = () => {
		const date = new Date();
		const month = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		setMonth(month[date.getMonth()]);
	};

	useEffect(() => {
		onSetMonth();
		getMonthDiaries(user.uid);
	}, []);

	return <MonthList month={month} monthDiaries={monthDiaries} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	monthDiaries: state.diary.monthDiaries.sort((a, b) => {
		return a.day > b.day ? -1 : a.day < b.day ? 1 : 0;
	}),
});

export default connect(
	mapStateToProps,
	{ getMonthDiaries }
)(MonthListCon);
