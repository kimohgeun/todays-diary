import React, { useState, useEffect } from 'react';
import WriteModal from '../components/WriteModal';
import { connect } from 'react-redux';
import { changeInput, chooseWeather, addTime, writeDiary } from '../store/diary';

const WriteModalCon = ({
	toggle,
	onSetToggle,
	weather,
	chooseWeather,
	input,
	changeInput,
	uploaded,
	addTime,
	user,
	writeDiary,
}) => {
	const [date, setDate] = useState({ year: '', month: '', day: '', dayOfWeek: '' });
	const [loading, setLoading] = useState(false);

	// 날짜 가져오기
	const onSetDate = () => {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
		setDate({
			year,
			month,
			day,
			dayOfWeek: dayOfWeek[date.getDay()],
		});
	};

	useEffect(() => {
		onSetDate();
	}, []);

	// 날씨 선택하기
	const onChooseWeather = weather => {
		chooseWeather(weather);
	};

	// 텍스트 입력하기
	const onChange = e => {
		changeInput(e.target.value);
	};

	// 일기 저장하기
	const onSubmit = e => {
		e.preventDefault();
		setLoading(true);
		const uid = user.uid;
		const text = input.replace(/\n/g, '<br/>');
		const data = {
			year: date.year.toString(),
			month: date.month.toString(),
			day: date.day.toString(),
			dayOfWeek: date.dayOfWeek,
			text,
		};
		writeDiary(uid, data);
	};

	useEffect(() => {
		if (uploaded) {
			setLoading(false);
		}
	}, [uploaded]);

	return (
		<WriteModal
			toggle={toggle}
			onSetToggle={onSetToggle}
			date={date}
			weather={weather}
			onChooseWeather={onChooseWeather}
			input={input}
			onChange={onChange}
			addTime={addTime}
			onSubmit={onSubmit}
			uploaded={uploaded}
			loading={loading}
		/>
	);
};

const mapStateToProps = state => ({
	user: state.auth.user,
	input: state.diary.input,
	weather: state.diary.weather,
	uploaded: state.diary.uploaded,
});

export default connect(
	mapStateToProps,
	{ changeInput, chooseWeather, addTime, writeDiary }
)(WriteModalCon);
