import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loading from './Loading';

const Box = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0px;
	left: 0px;
	display: ${props => (props.toggle ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	z-index: 1;
`;

const Container = styled.div`
	width: 300px;
	font-size: 0.8rem;
	background-color: #fafafa;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	border-radius: 5px;
`;

const Title = styled.span`
	display: block;
	font-weight: bold;
	padding: 20px 10px;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-top: 20px;
`;

const Button = styled.button`
	all: unset;
	padding: 10px;
	margin: 10px;
	background-color: ${props => props.bgColor};
	color: ${props => props.color};
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: ${props => props.hover};
	}
`;

const DeleteModal = ({ toggle, loading, onToggle, onDeleteDiary }) => (
	<Box toggle={toggle}>
		{loading && <Loading />}
		<Container>
			<Title>
				<i className="fas fa-exclamation-circle" /> 일기를 삭제하시겠어요?
			</Title>
			<ButtonContainer>
				<Button color="#424242" bgColor="#fff" hover="#EEE" onClick={onToggle}>
					취소
				</Button>
				<Button color="#fff" bgColor="#424242" hover="#616161" onClick={onDeleteDiary}>
					삭제
				</Button>
			</ButtonContainer>
		</Container>
	</Box>
);

DeleteModal.propTypes = {
	toggle: PropTypes.bool,
	loading: PropTypes.bool,
	onToggle: PropTypes.func,
	onDeleteDiary: PropTypes.func,
};

export default DeleteModal;
