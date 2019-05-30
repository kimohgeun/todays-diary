import React from 'react';
import Setting from '../components/Setting';
import { connect } from 'react-redux';
import { changeFont, changeModalColor } from '../store/setting';

const SettingCon = ({ user, font, color, changeFont, changeModalColor }) => {
	const uid = user.uid;
	// 폰트 변경
	const onChangeFont = font => {
		changeFont(uid, font);
	};

	// 모달 배경 변경
	const onChangeModalColor = color => {
		changeModalColor(uid, color);
	};

	return <Setting font={font} color={color} onChangeFont={onChangeFont} onChangeModalColor={onChangeModalColor} />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	font: state.setting.font,
	color: state.setting.color,
});

export default connect(
	mapStateToProps,
	{
		changeFont,
		changeModalColor,
	}
)(SettingCon);
