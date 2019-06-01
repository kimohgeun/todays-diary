import React, { useEffect } from 'react';
import DeleteModal from '../components/DeleteModal';
import { connect } from 'react-redux';
import { changeDeleteToggle, changeReadToggle } from '../store/toggle';
import { deleteDiary, initState } from '../store/diary';
import { changeDayDiaryLoading, changeDeleting } from '../store/loading';

const DeleteModalCon = ({
	user,
	dayDiary,
	toggle,
	loading,
	deleted,
	changeDeleteToggle,
	changeReadToggle,
	deleteDiary,
	initState,
	changeDayDiaryLoading,
	changeDeleting,
}) => {
	// 삭제 모달 토글
	const onToggle = () => {
		changeDeleteToggle();
	};

	// 일기 삭제
	const onDeleteDiary = () => {
		const uid = user.uid;
		const id = dayDiary.id;
		deleteDiary(uid, id);
		changeDeleting();
	};

	// 삭제왼료
	useEffect(() => {
		if (deleted) {
			onToggle();
			initState();
			changeDayDiaryLoading();
			changeReadToggle();
		}
	}, [deleted]);

	return <DeleteModal toggle={toggle} loading={loading} onToggle={onToggle} onDeleteDiary={onDeleteDiary} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	dayDiary: state.diary.dayDiary[0],
	toggle: state.toggle.deleteToggle,
	loading: state.loading.deleting,
	deleted: state.diary.deleted,
});

export default connect(
	mapStateToProps,
	{
		changeDeleteToggle,
		changeReadToggle,
		deleteDiary,
		initState,
		changeDayDiaryLoading,
		changeDeleting,
	}
)(DeleteModalCon);
