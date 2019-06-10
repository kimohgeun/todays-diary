import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Null from './Null';
import MonthItem from '../containers/MonthItemCon';
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

const SearchList = ({ match, searchList, loading, font, onSortUp, onSortDown }) => (
	<Box font={font}>
		{loading ? (
			<Loading />
		) : (
			<>
				<ReadDiary />
				<TopContainer>
					<Title>{`${match.params.year}년 ${match.params.month}월 일기`}</Title>
					<div>
						<Button onClick={onSortUp}>
							<i className="far fa-arrow-alt-circle-up" /> 오름차순
						</Button>
						<Button onClick={onSortDown}>
							<i className="far fa-arrow-alt-circle-down" /> 내림차순
						</Button>
					</div>
				</TopContainer>
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

SearchList.propTypes = {
	searchList: PropTypes.array,
	loading: PropTypes.bool,
	font: PropTypes.string,
	onSortUp: PropTypes.func,
	onSortDown: PropTypes.func,
};

export default SearchList;
