import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { logout } from '../store/auth';
import { changeWriteToggle } from '../store/toggle';

const HeaderCon = ({ logout, changeWriteToggle }) => {
	// 로그아웃
	const onLogout = () => {
		logout();
	};
	// 모달 토글
	const onToggle = () => {
		changeWriteToggle();
	};
	return <Header onLogout={onLogout} onToggle={onToggle} />;
};

export default connect(
	null,
	{ logout, changeWriteToggle }
)(HeaderCon);
