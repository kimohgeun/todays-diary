import React, { useState, useEffect } from 'react';
import YearItem from '../components/YearItem';
import { connect } from 'react-redux';
import { changeSearchList } from '../store/loading';
import firebase from '../config/firebase';

const YearItemCon = ({ user, year, changeSearchList }) => {
	const [monthList, setMonthList] = useState([]);

	// 연도별 작성된 달 가져오기
	const getMonthList = (uid, year) => {
		const list = [];
		firebase
			.firestore()
			.collection(uid)
			.where('year', '==', year)
			.get()
			.then(docs => {
				docs.forEach(doc => {
					list.push(doc.data().month);
				});
			})
			.then(() => setMonthList(list));
	};

	useEffect(() => {
		getMonthList(user.uid, year);
	}, []);

	// 일기 검색 로딩 상태로 바꾸기
	const onLoading = () => {
		changeSearchList(true);
	};

	return <YearItem year={year} monthList={monthList} onLoading={onLoading} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
});

export default connect(
	mapStateToProps,
	{ changeSearchList }
)(YearItemCon);
