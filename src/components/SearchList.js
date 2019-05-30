import React from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import Null from './Null';
import MonthItem from '../containers/MonthItemCon';
import ReadDiary from '../containers/ReadDiaryCon';

const Box = styled.div`
	width: 1024px;
	padding: 50px 0;
	margin: 0 auto;
`;

const Title = styled.span`
	font-weight: 700;
	display: block;
	margin: 50px 0;
	font-size: 0.9rem;
`;

const Container = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
`;

const SearchList = ({ match, searchList, loading }) => (
	<Box>
		{loading ? (
			<Loading />
		) : (
			<>
				<ReadDiary />
				<Title>{`${match.params.year}년 ${match.params.month}월 일기`}</Title>
				{searchList.length === 0 ? (
					<Null icon="fas fa-search" text="검색 결과를 찾을 수 없습니다." />
				) : (
					<Container>
						{searchList.map(diary => (
							<MonthItem key={diary.id} diary={diary} />
						))}
					</Container>
				)}
			</>
		)}
	</Box>
);

export default SearchList;
