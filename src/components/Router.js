import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuth } from '../store/auth';
import { getMonthList } from '../store/diary';
import { getSetting } from '../store/setting';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import Login from '../containers/LoginCon';
import Header from '../containers/HeaderCon';
import MonthList from '../containers/MonthListCon';
import YearList from '../containers/YearListCon';
import SearchList from '../containers/SearchListCon';
import Setting from '../containers/SettingCon';

const Router = ({ user, getAuth, authLoading, isAuthenticated, getMonthList, getSetting, monthListLoading }) => {
	// 인증 불러오기
	useEffect(() => {
		getAuth();
	}, []);

	// 이번달 작성된 일기 가져오기
	useEffect(() => {
		if (isAuthenticated) {
			getMonthList(user.uid);
			getSetting(user.uid);
		}
	}, [isAuthenticated]);

	return (
		<BrowserRouter>
			{authLoading ? (
				<Loading />
			) : !isAuthenticated ? (
				<Switch>
					<Route exact path="/" component={Login} />
					<Redirect from="*" to="/" />
				</Switch>
			) : monthListLoading ? (
				<Loading />
			) : (
				<>
					<Header />
					<Switch>
						<Route exact path="/" component={MonthList} />
						<Route exact path="/year_list" component={YearList} />
						<Route exact path="/setting" component={Setting} />
						<Route exact path="/:year/:month" component={SearchList} />
						<Redirect from="*" to="/" />
					</Switch>
				</>
			)}
		</BrowserRouter>
	);
};

const mapStateToProps = state => ({
	user: state.auth.user,
	authLoading: state.auth.loading,
	isAuthenticated: state.auth.isAuthenticated,
	monthListLoading: state.loading.monthList,
});

export default connect(
	mapStateToProps,
	{ getAuth, getSetting, getMonthList }
)(Router);
