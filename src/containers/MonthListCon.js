import React from 'react';
import MonthList from '../components/MonthList';
import { connect } from 'react-redux';

const MonthListCon = ({ monthList }) => {
	// 이번달 날짜 가져오기
	const date = new Date();
	const month = date.getMonth() + 1;

	return <MonthList month={month} monthList={monthList} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	monthList: state.diary.monthList.sort(),
});

export default connect(mapStateToProps)(MonthListCon);
