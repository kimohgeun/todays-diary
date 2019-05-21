import React from 'react';
import styled from 'styled-components';
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

const Container = styled.li`
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
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
	&:hover {
		transform: scale(1.2);
	}
	transition: transform 0.2s linear;
	cursor: pointer;
`;

const Text = styled.span`
	margin: 15px;
	font-weight: 700;
	font-family: 'Jua', sans-serif;
`;

const Bottom = styled.div`
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const Icon = styled.i`
	margin: 10px;
	color: #bdbdbd;
	&:hover {
		color: #e74c3c;
	}
	transition: color 0.2s linear;
	cursor: pointer;
`;

const YearItem = ({ year }) => (
	<Container>
		<Top>
			<Year>{year}</Year>
			<AnimalImage animal={yearOfAnimal[parseInt(year) % 12]} />
			<Text>오늘의 일기</Text>
		</Top>
		<Bottom>
			<Icon className="fas fa-trash" />
		</Bottom>
	</Container>
);

export default YearItem;
