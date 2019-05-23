import React, { useEffect } from 'react';
import YearList from '../components/YearList';
import { connect } from 'react-redux';
import { getYearList } from '../store/diary';

const YearListCon = ({ user, getYearList, yearList, loading }) => {
	useEffect(() => {
		getYearList(user.uid);
	}, []);

	return <YearList yearList={yearList} loading={loading} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	yearList: state.diary.yearList,
	loading: state.diary.loading.getYearList,
});

export default connect(
	mapStateToProps,
	{ getYearList }
)(YearListCon);
