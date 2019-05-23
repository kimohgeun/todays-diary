import React from 'react';
import styled from 'styled-components';
import MonthItem from '../components/MonthItem';
import Loading from '../components/Loading';
import Null from '../components/Null';

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

const MonthList = ({ month, monthDiaries, loading }) => (
	<Box>
		<Title>{month}월의 일기</Title>
		{loading ? (
			<Loading />
		) : (
			<>
				{monthDiaries.length === 0 ? (
					<Null />
				) : (
					<Container>
						{monthDiaries.map(diary => (
							<MonthItem key={diary.id} diary={diary} />
						))}
					</Container>
				)}
			</>
		)}
	</Box>
);

export default MonthList;
