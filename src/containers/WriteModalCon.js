import React, { useState, useEffect } from 'react';
import WriteModal from '../components/WriteModal';
import { connect } from 'react-redux';
import { changeWriteToggle } from '../store/toggle';
import { chooseWeather, changeInput, addTime, writeDiary, initState } from '../store/diary';
import { changeUploading } from '../store/loading';

const WriteModalCon = ({
	user,
	toggle,
	weather,
	input,
	uploading,
	uploaded,
	changeWriteToggle,
	chooseWeather,
	changeInput,
	addTime,
	writeDiary,
	initState,
	changeUploading,
}) => {
	// 모달 토글
	const onToggle = () => {
		changeWriteToggle();
		initState();
	};

	// 오늘 날짜 가져오기
	const [date, setDate] = useState({ year: '', month: '', day: '', dayOfWeek: '' });
	const onSetDate = () => {
		const date = new Date();
		const year = date.getFullYear();
		const day = date.getDate();
		const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
		setDate({
			year,
			month: date.getMonth() + 1,
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

	// 시간 추가하기
	const onAddTime = () => {
		addTime();
	};

	// 일기 저장하기
	const onSubmit = e => {
		e.preventDefault();
		changeUploading();
		const uid = user.uid;
		const text = input.replace(/\n/g, '<br/>');
		const data = {
			year: date.year.toString(),
			month: date.month.toString(),
			day: date.day.toString(),
			dayOfWeek: date.dayOfWeek,
			weather,
			text,
		};
		writeDiary(uid, data);
	};

	// 업로드 완료
	useEffect(() => {
		if (uploaded) {
			setTimeout(() => {
				onToggle();
			}, 2000);
		}
	}, [uploaded]);

	return (
		<WriteModal
			toggle={toggle}
			onToggle={onToggle}
			date={date}
			weather={weather}
			onChooseWeather={onChooseWeather}
			input={input}
			onChange={onChange}
			onAddTime={onAddTime}
			onSubmit={onSubmit}
			uploading={uploading}
			uploaded={uploaded}
		/>
	);
};

const mapStateToProps = state => ({
	user: state.auth.user,
	toggle: state.toggle.writeToggle,
	weather: state.diary.weather,
	input: state.diary.input,
	uploading: state.loading.uploading,
	uploaded: state.diary.uploaded,
});

export default connect(
	mapStateToProps,
	{ changeWriteToggle, chooseWeather, changeInput, addTime, writeDiary, initState, changeUploading }
)(WriteModalCon);
