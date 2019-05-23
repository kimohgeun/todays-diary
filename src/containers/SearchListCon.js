import React, { useEffect } from 'react';
import SearchList from '../components/SearchList';
import { connect } from 'react-redux';
import { getSearchList, initState } from '../store/diary';

const SearchListCon = ({ match, user, getSearchList, searchList, loading, initState }) => {
	const year = match.params.year;
	const month = match.params.month;
	useEffect(() => {
		getSearchList(user.uid, year, month);
		initState();
	}, []);

	return <SearchList match={match} searchList={searchList} loading={loading} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	searchList: state.diary.searchList,
	loading: state.diary.loading.getSearchList,
});

export default connect(
	mapStateToProps,
	{ getSearchList, initState }
)(SearchListCon);
