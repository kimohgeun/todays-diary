import React from 'react';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { googleLogin, facebookLogin } from '../store/auth';

const LoginCon = ({ googleLogin, facebookLogin }) => {
	const onGoogleLogin = () => {
		googleLogin();
	};

	const onFacebookLogin = () => {
		facebookLogin();
	};
	return <Login onGoogleLogin={onGoogleLogin} onFacebookLogin={onFacebookLogin} />;
};

export default connect(
	null,
	{ googleLogin, facebookLogin }
)(LoginCon);
