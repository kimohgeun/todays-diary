import React from 'react';
import styled from 'styled-components';
import YearItem from '../containers/YearItemCon';
import Loading from './Loading';
import Null from './Null';

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

const YearList = ({ yearList, loading }) => (
	<Box>
		<Title>일기장 목록</Title>
		{loading ? (
			<Loading />
		) : (
			<>
				{yearList.length === 0 ? (
					<Null icon="fas fa-book" text="아직 작성된 일기장이 없습니다."/>
				) : (
					<Container>
						{yearList.map(year => (
							<YearItem key={year} year={year} />
						))}
					</Container>
				)}
			</>
		)}
	</Box>
);

export default YearList;
