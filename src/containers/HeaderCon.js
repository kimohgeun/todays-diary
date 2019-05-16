import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { logout } from '../store/auth';
import { initState } from '../store/diary';

const HeaderCon = ({ logout, uploaded, initState }) => {
	const [toggle, setToggle] = useState(false);

	// 모달 토글
	const onSetToggle = () => {
		setToggle(!toggle);
		initState();
	};

	useEffect(() => {
		if (uploaded) {
			setTimeout(() => {
				initState();
				onSetToggle();
			}, 3500);
		}
	}, [uploaded]);

	// 로그아웃
	const onLogout = () => {
		logout();
	};

	return <Header onLogout={onLogout} toggle={toggle} onSetToggle={onSetToggle} />;
};

const mapStateToProps = state => ({
	uploaded: state.diary.uploaded,
});

export default connect(
	mapStateToProps,
	{ logout, initState }
)(HeaderCon);
