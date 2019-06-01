import React from 'react';
import MonthItem from '../components/MonthItem';
import { connect } from 'react-redux';
import { getDayDiary } from '../store/diary';
import { changeReadToggle } from '../store/toggle';

const MonthItemCon = ({ diary, user, getDayDiary, changeReadToggle }) => {
	// 일기 읽기 모달
	const { uid } = user;
	const { year, month, day } = diary;

	const onToggle = () => {
		changeReadToggle();
		getDayDiary(uid, year, month, day);
	};

	return <MonthItem diary={diary} onToggle={onToggle} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
});

export default connect(
	mapStateToProps,
	{ getDayDiary, changeReadToggle }
)(MonthItemCon);
