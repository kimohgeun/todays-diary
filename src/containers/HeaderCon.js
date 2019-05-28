import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { logout } from '../store/auth';
import { changeWriteToggle, changeNotificationToggle } from '../store/toggle';

const HeaderCon = ({ monthList, logout, changeWriteToggle, toggle, changeNotificationToggle }) => {
	// 로그아웃
	const onLogout = () => {
		logout();
	};

	// 모달 토글
	const onToggle = () => {
		const check = checkTodayDiary();
		if (check.length !== 0) {
			changeNotificationToggle();
			setTimeout(() => {
				changeNotificationToggle();
			}, 2000);
		} else {
			changeWriteToggle();
		}
	};

	// 오늘 작성된 일기가 있는지 체크
	const checkTodayDiary = () => {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();

		const checkDiary = monthList.filter(item => item.id === `${year}-${month}-${day}`);

		return checkDiary;
	};

	return <Header onLogout={onLogout} onToggle={onToggle} toggle={toggle} />;
};

const mapStateToProps = state => ({
	monthList: state.diary.monthList,
	toggle: state.toggle.notificationToggle,
});

export default connect(
	mapStateToProps,
	{ logout, changeWriteToggle, changeNotificationToggle }
)(HeaderCon);
