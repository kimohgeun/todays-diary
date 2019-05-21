import React, { useEffect } from 'react';
import YearList from '../components/YearList';
import { connect } from 'react-redux';
import { getYearList } from '../store/diary';

const YearListCon = ({ user, getYearList, yearList }) => {
	console.log(yearList);

	useEffect(() => {
		getYearList(user.uid);
	}, []);

	return <YearList yearList={yearList} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	yearList: state.diary.yearList.sort(),
});

export default connect(
	mapStateToProps,
	{ getYearList }
)(YearListCon);
