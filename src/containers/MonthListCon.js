import React, { useEffect } from 'react';
import MonthList from '../components/MonthList';
import { connect } from 'react-redux';
import { sortUpList, sortDownList } from '../store/diary';

const MonthListCon = ({ monthList, font, sortUpList, sortDownList }) => {
	// 이번달 날짜 가져오기
	const date = new Date();
	const month = date.getMonth() + 1;

	// 오름차순 정렬
	const onSortUp = () => {
		sortUpList('monthList');
	};
	// 내림차순 정렬
	const onSortDown = () => {
		sortDownList('monthList');
	};

	useEffect(() => {
		onSortDown();
	}, []);

	return <MonthList month={month} font={font} monthList={monthList} onSortUp={onSortUp} onSortDown={onSortDown} />;
};

const mapStateToProps = state => ({
	monthList: state.diary.monthList,
	font: state.setting.font,
});

export default connect(
	mapStateToProps,
	{ sortUpList, sortDownList }
)(MonthListCon);
