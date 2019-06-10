import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MonthItem from '../containers/MonthItemCon';
import Null from '../components/Null';
import ReadDiary from '../containers/ReadDiaryCon';

const Box = styled.div`
	width: 1024px;
	padding: 50px 0;
	margin: 0 auto;
	font-family: ${props => props.font};
`;

const Title = styled.span`
	font-weight: 700;
	display: block;
	margin: 50px 0;
	font-size: 0.9rem;
`;

const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Button = styled.button`
	border: none;
	outline: none;
	font-size: 0.7rem;
	background-color: #424242;
	color: #fff;
	padding: 5px;
	margin-left: 10px;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #616161;
	}
`;

const Container = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
`;

const MonthList = ({ month, font, monthList, onSortUp, onSortDown }) => (
	<Box font={font}>
		<ReadDiary />
		<TopContainer>
			<Title>{month}월의 일기</Title>
			<div>
				<Button onClick={onSortUp}>
					<i className="far fa-arrow-alt-circle-up" /> 오름차순
				</Button>
				<Button onClick={onSortDown}>
					<i className="far fa-arrow-alt-circle-down" /> 내림차순
				</Button>
			</div>
		</TopContainer>
		{monthList.length === 0 ? (
			<Null icon="fas fa-edit" text="아직 작성된 일기가 없습니다." />
		) : (
			<Container>
				{monthList.map(diary => (
					<MonthItem key={diary.id} diary={diary} />
				))}
			</Container>
		)}
	</Box>
);

MonthList.propTypes = {
	month: PropTypes.number,
	font: PropTypes.string,
	monthList: PropTypes.array,
	onSortUp:PropTypes.func,
	onSortDown: PropTypes.func,
};

export default MonthList;
