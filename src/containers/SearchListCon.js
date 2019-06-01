import React, { useEffect } from 'react';
import SearchList from '../components/SearchList';
import { connect } from 'react-redux';
import { getSearchList, initState } from '../store/diary';

const SearchListCon = ({ match, user, searchList, loading, getSearchList, initState }) => {
	const year = match.params.year;
	const month = match.params.month;

	// 검색한 일기 가져오기
	useEffect(() => {
		getSearchList(user.uid, year, month);
		initState();
	}, []);

	return <SearchList match={match} searchList={searchList} loading={loading} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	searchList: state.diary.searchList,
	loading: state.loading.searchListLoading,
});

export default connect(
	mapStateToProps,
	{ getSearchList, initState }
)(SearchListCon);
