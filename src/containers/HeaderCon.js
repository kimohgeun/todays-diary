import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { logout } from '../store/auth';

const HeaderCon = ({ logout }) => {
	const onLogout = () => {
		logout();
	};
	return <Header onLogout={onLogout} />;
};

export default connect(
	null,
    { logout }
)(HeaderCon);
