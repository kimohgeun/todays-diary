import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.li`
	height: 150px;
	background-color: #fff;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	padding: 20px;
	&:hover {
		transform: scale(1.05);
	}
	transition: transform 0.2s linear;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const LeftContainer = styled.div`
	width: 80px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Day = styled.span`
	font-size: 1.2rem;
	font-weight: 700;
	padding: 5px;
	color: ${props => {
		if (props.dayOfWeek === 'SAT') {
			return '#3498db';
		} else if (props.dayOfWeek === 'SUN') {
			return '#e74c3c';
		} else {
			return '#424242';
		}
	}};
`;

const DayOfWeek = styled.span`
	display: block;
	font-size: 0.8rem;
	font-weight: 700;
	margin: 5px;
	color: ${props => {
		if (props.dayOfWeek === '토') {
			return '#3498db';
		} else if (props.dayOfWeek === '일') {
			return '#e74c3c';
		} else {
			return '#424242';
		}
	}};
`;

const Weather = styled.i`
	color: #bdbdbd;
	margin: 5px;
`;

const RightContainer = styled.div`
	width: 200px;
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 0.8rem;
	color: #757575;
	line-height: 110px;
`;

const MonthItem = ({ diary, onToggle }) => (
	<Container onClick={onToggle}>
		<LeftContainer>
			<Day dayOfWeek={diary.dayOfWeek}>{diary.day}</Day>
			<DayOfWeek dayOfWeek={diary.dayOfWeek}>{diary.dayOfWeek}</DayOfWeek>
			<Weather className={diary.weather} />
		</LeftContainer>
		<RightContainer>{diary.text.replace(/<br\s*\/?>/gm, '\n')}</RightContainer>
	</Container>
);

MonthItem.propTypes = {
	diary: PropTypes.object,
	onToggle: PropTypes.func,
};

export default MonthItem;
