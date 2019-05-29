import React, { useEffect } from 'react';
import DeleteModal from '../components/DeleteModal';
import { connect } from 'react-redux';
import { chnageDeleteToggle, changeReadToggle } from '../store/toggle';
import { deleteDiary, initState } from '../store/diary';
import { changeDeleting, changeDayDiary } from '../store/loading';

const DeleteModalCon = ({
	user,
	dayDiary,
	toggle,
	chnageDeleteToggle,
	deleteDiary,
	changeDeleting,
	loading,
	deleted,
	initState,
	changeReadToggle,
	changeDayDiary,
}) => {
	const onToggle = () => {
		chnageDeleteToggle();
	};

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
			changeDayDiary();
			changeReadToggle();
		}
	}, [deleted]);

	return <DeleteModal toggle={toggle} onToggle={onToggle} onDeleteDiary={onDeleteDiary} loading={loading} />;
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
	{ chnageDeleteToggle, deleteDiary, changeDeleting, initState, changeReadToggle, changeDayDiary }
)(DeleteModalCon);
