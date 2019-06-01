import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Loading from './Loading';
import DeleteModal from '../containers/DeleteModalCon';

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
	display: ${props => (props.toggle ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	position: fixed;
	top: 0px;
	left: 0px;
	animation: ${fade} 0.3s linear;
	z-index: 1;
	background-color: ${props => props.color};
	font-family: ${props => props.font};
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
	font-size: 0.7rem;
	margin: 10px 0;
	display: inline-block;
	border: 1px solid #ccc;
	padding: 5px 10px;
	border-radius: 10px;
`;

const WeatherContainer = styled.div`
	width: 120px;
	display: flex;
	justify-content: space-between;
`;

const WeatherIcon = styled.i`
	color: ${props => (props.weather ? '#424242' : '#e0e0e0')};
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
	font-family: ${props => props.font};
`;

const ClockIcon = styled.i`
	cursor: pointer;
	color: #bdbdbd;
	&:hover {
		color: #424242;
	}
	transition: color 0.1s linear;
`;

const DeleteIcon = styled.i`
	cursor: pointer;
	color: #bdbdbd;
	&:hover {
		color: #424242;
	}
	transition: color 0.1s linear;
	margin-left: 20px;
`;

const CancelIcon = styled.i`
	font-size: 1.5rem;
	color: ${props => (props.color === '#fafafa' ? '#424242' : '#fafafa')};
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
	background-color: ${props => (props.active & !props.updated ? '#424242' : '#bdbdbd')};
	color: #fff;
	padding: 5px 10px;
	border-radius: 5px;
	margin: 10px 0;
	cursor: ${props => (props.active & !props.updated ? 'pointer' : 'not-allowed')};
`;

const Mark = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	border: 3px solid #673ab7;
	font-size: 0.7rem;
	display: ${props => (props.updated ? 'flex' : 'none')};
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

const ReadDiary = ({
	active,
	toggle,
	dayDiary,
	weather,
	input,
	updated,
	dayDiaryLoading,
	uploading,
	font,
	color,
	onReadToggle,
	onDeleteToggle,
	onChooseWeather,
	onChange,
	onAddTime,
	onSubmit,
}) => (
	<Box toggle={toggle} font={font} color={color}>
		<CancelIcon className="fas fa-times" onClick={onReadToggle} color={color} />
		<DeleteModal />
		{dayDiaryLoading && uploading && <Loading />}
		<Form onSubmit={onSubmit}>
			<Container>
				<Date>
					{dayDiary.length !== 0 &&
						`${dayDiary[0].year}년 ${dayDiary[0].month}월 ${dayDiary[0].day}일 ${
							dayDiary[0].dayOfWeek
						}요일`}
				</Date>
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
			<Textarea id="write_textarea" value={input} onChange={onChange} font={font} />
			<Container>
				<div>
					<ClockIcon className="fas fa-clock" onClick={onAddTime} />
					<DeleteIcon className="fas fa-trash" onClick={onDeleteToggle} />
				</div>
				<SaveButton type="submit" disabled={!active} active={active} updated={updated}>
					수정하기
				</SaveButton>
				<Mark updated={updated}>
					<span>오늘의 일기!</span>
				</Mark>
			</Container>
		</Form>
	</Box>
);

ReadDiary.propTypes = {
	active: PropTypes.bool,
	toggle: PropTypes.bool,
	dayDiary: PropTypes.array,
	weather: PropTypes.string,
	input: PropTypes.string,
	updated: PropTypes.bool,
	dayDiaryLoading: PropTypes.bool,
	uploading: PropTypes.bool,
	font: PropTypes.string,
	color: PropTypes.string,
	onReadToggle: PropTypes.func,
	onDeleteToggle: PropTypes.func,
	onChooseWeather: PropTypes.func,
	onChange: PropTypes.func,
	onAddTime: PropTypes.func,
	onSubmit: PropTypes.func,
};

export default ReadDiary;
