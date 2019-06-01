import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import YearItem from '../containers/YearItemCon';
import Loading from './Loading';
import Null from './Null';

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

const Container = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 80px;
`;

const YearList = ({ yearList, loading, font }) => (
	<Box font={font}>
		<Title>일기장 목록</Title>
		{loading ? (
			<Loading />
		) : (
			<>
				{yearList.length === 0 ? (
					<Null icon="fas fa-book" text="아직 작성된 일기장이 없습니다." />
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

YearList.propTypes = {
	yearList: PropTypes.array,
	loading: PropTypes.bool,
	font: PropTypes.string,
};

export default YearList;
