import React from 'react';
import MonthItem from '../components/MonthItem';
import { connect } from 'react-redux';
import { getDayDiary } from '../store/diary';
import { changeReadToggle } from '../store/toggle';

const MonthItemCon = ({ diary, changeReadToggle, user, getDayDiary }) => {
	// 일기 가져오기 & 모달 토글
	const onToggle = () => {
		changeReadToggle();
		getDayDiary(user.uid, diary.year, diary.month, diary.day);
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
