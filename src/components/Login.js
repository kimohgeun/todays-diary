import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.span`
	font-family: 'Jua', sans-serif;
	font-size: 1.5rem;
	margin-bottom: 20px;
`;

const Button = styled.button`
	all: unset;
	width: 180px;
	height: 35px;
	text-align: center;
	font-size: 0.8rem;
	background-color: #424242;
	border-radius: 5px;
	color: #fff;
	margin: 10px 0;
	cursor: pointer;
	&:hover {
		background-color: #616161;
	}
	display: flex;
`;

const ButtonIcon = styled.i`
	margin: 0 20px;
`;

const ButtonSpan = styled.i`
	margin-left: 10px;
`;

const Login = ({ onGoogleLogin, onFacebookLogin }) => (
	<Box>
		<Container>
			<Title>오늘의 일기</Title>
			<Button onClick={onGoogleLogin}>
				<ButtonIcon className="fab fa-google" />
				<ButtonSpan>구글 로그인</ButtonSpan>
			</Button>
			<Button onClick={onFacebookLogin}>
				<ButtonIcon className="fab fa-facebook-f" />
				<ButtonSpan>페이스북 로그인</ButtonSpan>
			</Button>
		</Container>
	</Box>
);

Login.propTypes = {
	onGoogleLogin: PropTypes.func,
	onFacebookLogin: PropTypes.func,
};

export default Login;
