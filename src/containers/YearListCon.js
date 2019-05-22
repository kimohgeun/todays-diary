import React, { useState, useEffect } from 'react';
import YearList from '../components/YearList';
import { connect } from 'react-redux';
import { getYearList, getMonthList } from '../store/diary';

const YearListCon = ({ user, getYearList, yearList, getMonthList }) => {
	const [toggle, setToggle] = useState(false);

	// 모달 토글
	const onSetToggle = () => {
		setToggle(!toggle);
	};

	const onGetMonthList = year => {
		getMonthList(user.uid, year);
	};

	useEffect(() => {
		getYearList(user.uid);
	}, []);

	return (
		<YearList yearList={yearList} onGetMonthList={onGetMonthList} toggle={toggle} onSetToggle={onSetToggle} />
	);
};

const mapStateToProps = state => ({
	user: state.auth.user,
	yearList: state.diary.yearList.sort(),
});

export default connect(
	mapStateToProps,
	{ getYearList, getMonthList }
)(YearListCon);
