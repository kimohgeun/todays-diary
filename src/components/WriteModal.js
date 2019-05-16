import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';

const fade = keyframes`
	from {
		opacity:0;
	}
	to{
		opacity:1;
	}
`;

const Box = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #ecf0f1;
	display: ${props => (props.toggle ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	position: fixed;
	top: 0px;
	animation: ${fade} 0.5s linear;
`;

const Form = styled.form`
	width: 400px;
	background-color: #fff;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	position: relative;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
`;

const Date = styled.span`
	font-weight: 700;
	font-size: 0.8rem;
	margin: 10px 0;
	display: inline-block;
`;

const WeatherContainer = styled.div`
	width: 120px;
	display: flex;
	justify-content: space-between;
`;

const WeatherIcon = styled.i`
	color: ${props => (props.weather ? '#3498db' : '#BDBDBD')};
	cursor: pointer;
`;

const Textarea = styled.textarea`
	width: 400px;
	height: 400px;
	font-size: 0.8rem;
	background-attachment: local;
	background-image: linear-gradient(to right, white 10px, transparent 10px),
		linear-gradient(to left, white 10px, transparent 10px),
		repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
	line-height: 31px;
	padding: 8px 10px;
	border: none;
	outline: none;
	resize: none;
	overflow: none;
`;

const ClockIcon = styled.i`
	cursor: pointer;
	&:hover {
		color: #3498db;
	}
	transition: color 0.1s linear;
`;

const CancelIcon = styled.i`
	font-size: 1.5rem;
	color: #424242;
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

const SaveButton = styled.button`
	all: unset;
	font-size: 0.8rem;
	background-color: ${props => (props.active & !props.uploaded ? '#3498db' : '#bdbdbd')};
	color: #fff;
	padding: 5px 10px;
	border-radius: 5px;
	margin: 10px 0;
	cursor: ${props => (props.active & !props.uploaded ? 'pointer' : 'not-allowed')};
`;

const GoodMark = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	border: 3px solid #673ab7;
	font-size: 0.7rem;
	display: ${props => (props.uploaded ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	color: #673ab7;
	font-weight: 700;
	transform: rotate(-10deg);
	position: absolute;
	bottom: 80px;
	right: 20px;
	animation: ${fade} 2s linear;
`;

const WriteModal = ({
	toggle,
	onSetToggle,
	date,
	weather,
	onChooseWeather,
	input,
	onChange,
	addTime,
	onSubmit,
	uploaded,
	loading,
}) => (
	<Box toggle={!toggle}>
		<CancelIcon className="fas fa-times" onClick={onSetToggle} />
		{loading && <Loading />}
		<Form onSubmit={onSubmit}>
			<Container>
				<Date>{`${date.month}월 ${date.day}일 ${date.dayOfWeek}요일`}</Date>
				<WeatherContainer>
					<WeatherIcon
						className="fas fa-sun"
						weather={weather === 'fas fa-sun'}
						onClick={() => onChooseWeather('fas fa-sun')}
					/>
					<WeatherIcon
						className="fas fa-cloud-sun"
						weather={weather === 'fas fa-cloud-sun'}
						onClick={() => onChooseWeather('fas fa-cloud-sun')}
					/>
					<WeatherIcon
						className="fas fa-cloud"
						weather={weather === 'fas fa-cloud'}
						onClick={() => onChooseWeather('fas fa-cloud')}
					/>
					<WeatherIcon
						className="fas fa-umbrella"
						weather={weather === 'fas fa-umbrella'}
						onClick={() => onChooseWeather('fas fa-umbrella')}
					/>
					<WeatherIcon
						className="fas fa-snowman"
						weather={weather === 'fas fa-snowman'}
						onClick={() => onChooseWeather('fas fa-snowman')}
					/>
				</WeatherContainer>
			</Container>
			<Textarea id="write_textarea" value={input} onChange={onChange} />
			<Container>
				<ClockIcon className="fas fa-clock" onClick={addTime} />
				<SaveButton
					type="submit"
					disabled={weather !== '' && input !== '' ? false : true}
					active={weather !== '' && input !== '' ? true : false}
					uploaded={uploaded}
				>
					작성하기
				</SaveButton>
			</Container>
			<GoodMark uploaded={uploaded}>
				<span>참! 잘했어요</span>
			</GoodMark>
		</Form>
	</Box>
);

export default WriteModal;