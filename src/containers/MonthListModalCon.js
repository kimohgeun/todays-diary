import React from 'react';
import MonthListModal from '../components/MonthListModal';
import { connect } from 'react-redux';

const MonthListModalCon = ({ year, toggle, onSetToggle, monthList }) => {
    return <MonthListModal year={year} toggle={toggle} onSetToggle={onSetToggle} monthList={monthList} />;
};

const mapStateToProps = state => ({
    monthList: state.diary.monthList,
});

export default connect(mapStateToProps)(MonthListModalCon);
