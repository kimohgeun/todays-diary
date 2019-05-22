import React, { useEffect } from 'react';
import SearchList from '../components/SearchList';
import { connect } from 'react-redux';
import { getSearchList } from '../store/diary';

const SearchListCon = ({ match, user, getSearchList, searchList }) => {
	const year = match.params.year;
	const month = match.params.month;

	useEffect(() => {
		getSearchList(user.uid, year, month);
	}, []);

	console.log(searchList);
	return <SearchList match={match} searchList={searchList} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	searchList: state.diary.searchList
});

export default connect(
	mapStateToProps,
	{ getSearchList }
)(SearchListCon);
