import React, { useEffect } from 'react';
import SearchList from '../components/SearchList';
import { connect } from 'react-redux';
import { getSearchList, initState, sortUpList, sortDownList } from '../store/diary';

const SearchListCon = ({
	match,
	user,
	searchList,
	loading,
	font,
	getSearchList,
	initState,
	sortUpList,
	sortDownList,
}) => {
	const year = match.params.year;
	const month = match.params.month;

	// 검색한 일기 가져오기
	useEffect(() => {
		getSearchList(user.uid, year, month);
		initState();
	}, []);

	// 오름차순 정렬
	const onSortUp = () => {
		sortUpList('searchList');
	};
	// 내림차순 정렬
	const onSortDown = () => {
		sortDownList('searchList');
	};

	return (
		<SearchList
			match={match}
			searchList={searchList}
			loading={loading}
			font={font}
			onSortUp={onSortUp}
			onSortDown={onSortDown}
		/>
	);
};

const mapStateToProps = state => ({
	user: state.auth.user,
	searchList: state.diary.searchList,
	loading: state.loading.searchListLoading,
	font: state.setting.font,
});

export default connect(
	mapStateToProps,
	{ getSearchList, initState, sortUpList, sortDownList }
)(SearchListCon);
