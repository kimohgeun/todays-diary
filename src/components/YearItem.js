import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
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
	background-color: #fff;
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
	color: ${props => (props.active ? '#424242' : '#e0e0e0')};
`;

const Loading = styled.i`
	animation: ${spin} 1.5s linear infinite;
`;

const YearItem = ({ year, monthList, onLoading }) => (
	<Container>
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
						<Link to={`/search/${year}/1`} onClick={onLoading}>
							1월
						</Link>
					</Month>
					<Month active={monthList.includes('2')}>
						<Link to={`/search/${year}/2`} onClick={onLoading}>
							2월
						</Link>
					</Month>
					<Month active={monthList.includes('3')}>
						<Link to={`/search/${year}/3`} onClick={onLoading}>
							3월
						</Link>
					</Month>
					<Month active={monthList.includes('4')}>
						<Link to={`/search/${year}/4`} onClick={onLoading}>
							4월
						</Link>
					</Month>
					<Month active={monthList.includes('5')}>
						<Link to={`/search/${year}/5`} onClick={onLoading}>
							5월
						</Link>
					</Month>
					<Month active={monthList.includes('6')}>
						<Link to={`/search/${year}/6`} onClick={onLoading}>
							6월
						</Link>
					</Month>
					<Month active={monthList.includes('7')}>
						<Link to={`/search/${year}/7`} onClick={onLoading}>
							7월
						</Link>
					</Month>
					<Month active={monthList.includes('8')}>
						<Link to={`/search/${year}/8`} onClick={onLoading}>
							8월
						</Link>
					</Month>
					<Month active={monthList.includes('9')}>
						<Link to={`/search/${year}/9`} onClick={onLoading}>
							9월
						</Link>
					</Month>
					<Month ctive={monthList.includes('10')}>
						<Link to={`/search/${year}/10`} onClick={onLoading}>
							10월
						</Link>
					</Month>
					<Month ctive={monthList.includes('11')}>
						<Link to={`/search/${year}/11`} onClick={onLoading}>
							11월
						</Link>
					</Month>
					<Month active={monthList.includes('12')}>
						<Link to={`/search/${year}/12`} onClick={onLoading}>
							12월
						</Link>
					</Month>
				</>
			)}
		</Bottom>
	</Container>
);

YearItem.propTypes = {
	year: PropTypes.string,
	monthList: PropTypes.array,
	onLoading: PropTypes.func,
};

export default YearItem;
