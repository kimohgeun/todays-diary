import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import YearItem from '../components/YearItem';
import firebase from '../config/firebase';

const YearItemCon = ({ user, year }) => {
	const [monthList, setMonthList] = useState([]);

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

	return <YearItem year={year} monthList={monthList} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
});

export default connect(mapStateToProps)(YearItemCon);
