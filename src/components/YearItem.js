import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import monkey from '../assets/monkey.png';
import chicken from '../assets/chicken.png';
import dog from '../assets/dog.png';
import pig from '../assets/pig.png';
import mouse from '../assets/mouse.png';
import cow from '../assets/cow.png';
import tiger from '../assets/tiger.png';
import rabbit from '../assets/rabbit.png';
import dragon from '../assets/dragon.png';
import snake from '../assets/snake.png';
import horse from '../assets/horse.png';
import sheep from '../assets/sheep.png';

const yearOfAnimal = [monkey, chicken, dog, pig, mouse, cow, tiger, rabbit, dragon, snake, horse, sheep];

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

const Container = styled.li`
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	&:hover {
		transform: scale(1.05);
	}
	transition: transform 0.2s linear;
	cursor: pointer;
	font-family: 'Jua', sans-serif;
`;

const Top = styled.div`
	position: relative;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	width: 100%;
	height: 250px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #eeeeee;
`;

const Year = styled.span`
	font-weight: 700;
	font-size: 0.8rem;
	position: absolute;
	top: 10px;
	right: 10px;
`;

const AnimalImage = styled.div`
	width: 70px;
	height: 70px;
	background-image: url(${props => props.animal});
	background-size: cover;
	background-position: center center;
`;

const Text = styled.span`
	margin: 15px;
	font-weight: 700;
`;

const Bottom = styled.div`
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	width: 100%;
	height: 100px;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 20px;
	text-align: center;
	padding: 20px 10px;
`;

const Month = styled.span`
	font-size: 0.8rem;
	pointer-events: ${props => !props.active && 'none'};
	color: ${props => (props.active ? '#424242' : '#E0E0E0')};
`;

const Loading = styled.i`
	animation: ${spin} 1.5s linear infinite;
`;

const YearItem = ({ year, monthList }) => (
	<Container>
		{console.log(monthList)}
		<Top>
			<Year>{year}</Year>
			<AnimalImage animal={yearOfAnimal[parseInt(year) % 12]} />
			<Text>오늘의 일기</Text>
		</Top>
		<Bottom>
			{monthList.length === 0 ? (
				<div>
					<Loading className="fas fa-spinner" />
				</div>
			) : (
				<>
					<Month active={monthList.includes('1')}>
						<Link to={`/${year}/1`}>1월</Link>
					</Month>
					<Month active={monthList.includes('2')}>
						<Link to={`/${year}/2`}>2월</Link>
					</Month>
					<Month active={monthList.includes('3')}>
						<Link to={`/${year}/3`}>3월</Link>
					</Month>
					<Month active={monthList.includes('4')}>
						<Link to={`/${year}/4`}>4월</Link>
					</Month>
					<Month active={monthList.includes('5')}>
						<Link to={`/${year}/5`}>5월</Link>
					</Month>
					<Month active={monthList.includes('6')}>
						<Link to={`/${year}/6`}>6월</Link>
					</Month>
					<Month active={monthList.includes('7')}>
						<Link to={`/${year}/7`}>7월</Link>
					</Month>
					<Month active={monthList.includes('8')}>
						<Link to={`/${year}/8`}>8월</Link>
					</Month>
					<Month active={monthList.includes('9')}>
						<Link to={`/${year}/9`}>9월</Link>
					</Month>
					<Month ctive={monthList.includes('10')}>
						<Link to={`/${year}/10`}>10월</Link>
					</Month>
					<Month ctive={monthList.includes('11')}>
						<Link to={`/${year}/11`}>11월</Link>
					</Month>
					<Month active={monthList.includes('12')}>
						<Link to={`/${year}/12`}>12월</Link>
					</Month>
				</>
			)}
		</Bottom>
	</Container>
);

export default YearItem;
