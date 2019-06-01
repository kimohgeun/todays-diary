import React from 'react';
import MonthList from '../components/MonthList';
import { connect } from 'react-redux';

const MonthListCon = ({ monthList, font }) => {
	// 이번달 날짜 가져오기
	const date = new Date();
	const month = date.getMonth() + 1;

	return <MonthList month={month} font={font} monthList={monthList} />;
};

const mapStateToProps = state => ({
	monthList: state.diary.monthList.sort(),
	font: state.setting.font,
});

export default connect(mapStateToProps)(MonthListCon);
