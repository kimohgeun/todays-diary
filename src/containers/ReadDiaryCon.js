import React, { useState, useEffect } from 'react';
import ReadDiary from '../components/ReadDiary';
import { connect } from 'react-redux';
import { changeReadToggle } from '../store/toggle';
import { chooseWeather, changeInput, addTime, updateDiary, initState } from '../store/diary';
import { changeUploading, changeDayDiary } from '../store/loading';

const ReadDiaryCon = ({
	user,
	toggle,
	loading,
	dayDiary,
	weather,
	input,
	uploading,
	updated,
	changeReadToggle,
	chooseWeather,
	changeInput,
	addTime,
	updateDiary,
	initState,
	changeUploading,
	changeDayDiary,
}) => {
	// 모달 토글
	const onToggle = () => {
		changeReadToggle();
		changeDayDiary();
		initState();
	};

	// 수정버튼 활성화
	const [active, setActive] = useState(false);

	// 날씨 선택하기
	const onChooseWeather = weather => {
		chooseWeather(weather);
		setActive(true);
	};

	// 텍스트 입력하기
	const onChange = e => {
		changeInput(e.target.value);
		setActive(true);
	};

	// 시간 추가하기
	const onAddTime = () => {
		addTime();
		setActive(true);
	};

	// 일기 수정하기
	const onSubmit = e => {
		e.preventDefault();
		changeUploading();
		const uid = user.uid;
		const text = input.replace(/\n/g, '<br/>');
		const diary = dayDiary[0];
		const data = {
			id: diary.id,
			year: diary.year,
			month: diary.month,
			day: diary.day,
			dayOfWeek: diary.dayOfWeek,
			weather,
			text,
		};
		updateDiary(uid, data);
	};

	// 수정완료
	useEffect(() => {
		if (updated) {
			setTimeout(() => {
				onToggle();
			}, 2000);
		}
	}, [updated]);

	return (
		<ReadDiary
			active={active}
			toggle={toggle}
			onToggle={onToggle}
			loading={loading}
			dayDiary={dayDiary}
			weather={weather}
			onChooseWeather={onChooseWeather}
			input={input}
			onChange={onChange}
			onAddTime={onAddTime}
			onSubmit={onSubmit}
			uploading={uploading}
			updated={updated}
		/>
	);
};

const mapStateToProps = state => ({
	user: state.auth.user,
	toggle: state.toggle.readToggle,
	loading: state.loading.dayDiary,
	dayDiary: state.diary.dayDiary,
	weather: state.diary.weather,
	input: state.diary.input,
	uploading: state.loading.uploading,
	updated: state.diary.updated,
});

export default connect(
	mapStateToProps,
	{ changeReadToggle, chooseWeather, changeInput, addTime, updateDiary, initState, changeUploading, changeDayDiary }
)(ReadDiaryCon);
