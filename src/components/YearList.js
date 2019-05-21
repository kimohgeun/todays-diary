import React from 'react';
import styled from 'styled-components';
import YearItem from './YearItem';

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
	grid-gap: 100px;
`;

const YearList = ({ yearList }) => (
	<Box>
		<Title>일기장 목록</Title>
		<Container>
			{yearList.map(year => (
				<YearItem key={year} year={year} />
			))}
		</Container>
	</Box>
);

export default YearList;
