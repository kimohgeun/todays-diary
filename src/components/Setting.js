import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
	width: 1024px;
	height: 800px;
	padding: 50px 0;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Title = styled.span`
	font-weight: 700;
	display: block;
	margin: 50px 0;
	font-size: 0.9rem;
`;

const Container = styled.div`
	display: flex;
	width: 100%;
	margin: 50px 0;
`;

const Font = styled.span`
	cursor: pointer;
	color: ${props => (props.selected ? '#424242' : '#bdbdbd')};
	font-size: 0.9rem;
	font-family: ${props => props.font};
	&:hover {
		transform: scale(1.1);
	}
	transition: transform 0.2s linear;
	margin-right: 80px;
`;

const ModalColor = styled.div`
	width: 100px;
	height: 100px;
	background-color: ${props => props.color};
	border-radius: 10px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
	}
	transition: transform 0.2s linear;
	margin-right: 50px;
	position: relative;
`;

const CheckIcon = styled.i`
	position: absolute;
	top: 5px;
	right: 5px;
	color: ${props => props.color};
	display: ${props => (props.selected ? 'block' : 'none')};
`;

const Setting = ({ font, color, onChangeFont, onChangeModalColor }) => (
	<Box>
		<Title>글씨체</Title>
		<Container>
			<Font
				selected={font === "'Nanum Gothic', sans-serif"}
				font="'Nanum Gothic', sans-serif"
				onClick={() => onChangeFont("'Nanum Gothic', sans-serif")}
			>
				오늘의 일기
			</Font>
			<Font
				selected={font === "'Nanum Myeongjo', serif"}
				font="'Nanum Myeongjo', serif"
				onClick={() => onChangeFont("'Nanum Myeongjo', serif")}
			>
				오늘의 일기
			</Font>
			<Font
				selected={font === "'Gamja Flower', cursive"}
				font="'Gamja Flower', cursive"
				onClick={() => onChangeFont("'Gamja Flower', cursive")}
			>
				오늘의 일기
			</Font>
		</Container>
		<Title>모달 배경색</Title>
		<Container>
			<ModalColor color="#fafafa" onClick={() => onChangeModalColor('#fafafa')}>
				<CheckIcon className="fas fa-check" color="#424242" selected={color === '#fafafa'} />
			</ModalColor>
			<ModalColor color="#424242" onClick={() => onChangeModalColor('#424242')}>
				<CheckIcon className="fas fa-check" color="#fafafa" selected={color === '#424242'} />
			</ModalColor>
		</Container>
	</Box>
);

Setting.propTypes = {
	font: PropTypes.string,
	color: PropTypes.string,
	onChangeFont: PropTypes.func,
	onChangeModalColor: PropTypes.func,
};

export default Setting;
