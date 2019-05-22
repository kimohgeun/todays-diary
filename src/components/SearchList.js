import React from 'react';
import styled from 'styled-components';
import MonthItem from '../components/MonthItem';

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

const SearchList = ({ match, searchList }) => (
	<Box>
		<Title>{`${match.params.year}년 ${match.params.month}월 일기`}</Title>
		<Container>
			{searchList.lenth !== 0 && searchList.map(diary => <MonthItem key={diary.id} diary={diary} />)}
		</Container>
	</Box>
);

export default SearchList;
