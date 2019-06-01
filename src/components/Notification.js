import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const fade = keyframes`
	from {
		opacity:0;
	}
	to{
		opacity:1;
	}
`;

const Box = styled.div`
	width: 100%;
	position: absolute;
	top: 130px;
	left: 0px;
	display: ${props => (props.toggle ? 'flex' : 'none')};
	justify-content: center;
	animation: ${fade} 0.5s linear;
`;

const Container = styled.div`
	background: #fff;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
`;

const Title = styled.span`
	display: inline-block;
	font-weight: bold;
	font-size: 0.8rem;
	padding: 15px;
`;

const Notification = ({ toggle }) => (
	<Box toggle={toggle}>
		<Container>
			<Title>
				<i className="fas fa-bell" /> 오늘 작성된 일기가 있습니다.
			</Title>
		</Container>
	</Box>
);

Notification.propTypes = {
	toggle: PropTypes.bool,
};

export default Notification;
