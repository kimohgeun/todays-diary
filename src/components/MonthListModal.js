import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Box = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #424242;
	z-index: 1;
	opacity: 0.8;
	display: ${props => (props.toggle ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	width: 500px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	padding: 10px;
`;

const Title = styled.span`
	font-weight: bold;
	display: block;
	padding: 10px 0;
	text-align: center;
`;

const MonthContainer = styled.ul`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 20px;
	text-align: center;
	padding: 50px 0;
`;

const Month = styled.li`
	font-weight: 700;
	font-size: 0.8rem;
	color: ${props => (props.active ? '#424242' : '#e0e0e0')};
	cursor: ${props => (props.active ? 'pointer' : 'not-allowed')};
	pointer-events: ${props => !props.active && 'none'};
`;

const CancelIcon = styled.i`
	font-size: 1.5rem;
	color: #fff;
	margin: 10px 0;
	&:hover {
		transform: scale(1.2);
	}
	transition: transform 0.2s linear;
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
`;

const MonthListModal = ({ year, toggle, onSetToggle, monthList }) => (
	<Box toggle={toggle}>
		<CancelIcon className="fas fa-times" onClick={onSetToggle} />
		<Container>
			<Title>{year}년 일기장</Title>
			<MonthContainer>
				<Month active={monthList.includes('JAN')}>
					<Link to={`/${year}/1`}>JAN </Link>
				</Month>
				<Month active={monthList.includes('FEB')}>
					<Link to={`/${year}/2`}>FEB </Link>
				</Month>
				<Month active={monthList.includes('MAR')}>
					<Link to={`/${year}/3`}>MAR </Link>
				</Month>
				<Month active={monthList.includes('APR')}>
					<Link to={`/${year}/4`}>APR </Link>
				</Month>
				<Month active={monthList.includes('MAY')}>
					<Link to={`/${year}/5`}>MAY </Link>
				</Month>
				<Month active={monthList.includes('JUN')}>
					<Link to={`/${year}/6`}>JUL </Link>
				</Month>
				<Month active={monthList.includes('JUL')}>
					<Link to={`/${year}/7`}>JUL </Link>
				</Month>
				<Month active={monthList.includes('AUG')}>
					<Link to={`/${year}/8`}>AUG </Link>
				</Month>
				<Month active={monthList.includes('SEP')}>
					<Link to={`/${year}/9`}>SEP </Link>
				</Month>
				<Month active={monthList.includes('OCT')}>
					<Link to={`/${year}/10`}>OCT </Link>
				</Month>
				<Month active={monthList.includes('NOV')}>
					<Link to={`/${year}/11`}>NOV </Link>
				</Month>
				<Month active={monthList.includes('DEC')}>
					<Link to={`/${year}/12`}>DEC </Link>
				</Month>
			</MonthContainer>
		</Container>
	</Box>
);

export default MonthListModal;
