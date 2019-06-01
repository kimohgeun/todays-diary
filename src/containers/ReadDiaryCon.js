import React, { useState, useEffect } from 'react';
import ReadDiary from '../components/ReadDiary';
import { connect } from 'react-redux';
import { changeReadToggle, changeDeleteToggle } from '../store/toggle';
import { changeInput, chooseWeather, addTime, updateDiary, initState } from '../store/diary';
import { changeDayDiaryLoading, changeUploading } from '../store/loading';

const ReadDiaryCon = ({
	user,
	toggle,
	dayDiary,
	weather,
	input,
	updated,
	dayDiaryLoading,
	uploading,
	font,
	color,
	changeReadToggle,
	changeDeleteToggle,
	changeInput,
	chooseWeather,
	addTime,
	updateDiary,
	initState,
	changeDayDiaryLoading,
	changeUploading,
}) => {
	// 읽기 모달 토글
	const onReadToggle = () => {
		changeReadToggle();
		changeDayDiaryLoading();
		initState();
	};

	// 삭제 모달 토글
	const onDeleteToggle = () => {
		changeDeleteToggle();
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
				onReadToggle();
			}, 2000);
		}
	}, [updated]);

	return (
		<ReadDiary
			active={active}
			toggle={toggle}
			dayDiary={dayDiary}
			weather={weather}
			input={input}
			updated={updated}
			dayDiaryLoading={dayDiaryLoading}
			uploading={uploading}
			font={font}
			color={color}
			onReadToggle={onReadToggle}
			onDeleteToggle={onDeleteToggle}
			onChooseWeather={onChooseWeather}
			onChange={onChange}
			onAddTime={onAddTime}
			onSubmit={onSubmit}
		/>
	);
};

const mapStateToProps = state => ({
	user: state.auth.user,
	toggle: state.toggle.readToggle,
	dayDiary: state.diary.dayDiary,
	weather: state.diary.weather,
	input: state.diary.input,
	updated: state.diary.updated,
	dayDiaryLoading: state.loading.dayDiaryLoading,
	uploading: state.loading.uploading,
	font: state.setting.font,
	color: state.setting.color,
});

export default connect(
	mapStateToProps,
	{
		changeReadToggle,
		changeDeleteToggle,
		changeInput,
		chooseWeather,
		addTime,
		updateDiary,
		initState,
		changeDayDiaryLoading,
		changeUploading,
	}
)(ReadDiaryCon);
