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
`;

const Title = styled.span`
	font-weight: 700;
	display: block;
	text-align: center;
	margin: 30px 0;
`;

const Container = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
`;

const MonthList = ({ month, monthList }) => (
	<Box>
		<ReadDiary />
		<Title>{month}월의 일기</Title>
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
	monthList: PropTypes.array,
};

export default MonthList;
