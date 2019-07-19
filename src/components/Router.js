import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuth } from '../store/auth';
import { getMonthList } from '../store/diary';
import { getSetting } from '../store/setting';
import Loading from '../components/Loading';
import Login from '../containers/LoginCon';
import Header from '../containers/HeaderCon';
import MonthList from '../containers/MonthListCon';
import YearList from '../containers/YearListCon';
import SearchList from '../containers/SearchListCon';
import Setting from '../containers/SettingCon';

const Router = ({
	user,
	isAuthenticated,
	authLoading,
	monthListLoading,
	settingLoading,
	getAuth,
	getMonthList,
	getSetting,
}) => {
	// 인증 불러오기
	useEffect(() => {
		getAuth();
	}, []);

	// 이번달 작성된 일기 및 세팅 가져오기
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
			) : monthListLoading || settingLoading ? (
				<Loading />
			) : (
				<>
					<Header />
					<Switch>
						<Route exact path="/" component={MonthList} />
						<Route path="/year_list" component={YearList} />
						<Route path="/setting" component={Setting} />
						<Route path="/search/:year/:month" component={SearchList} />
						<Redirect from="*" to="/" />
					</Switch>
				</>
			)}
		</BrowserRouter>
	);
};

const mapStateToProps = state => ({
	user: state.auth.user,
	isAuthenticated: state.auth.isAuthenticated,
	authLoading: state.loading.authLoading,
	monthListLoading: state.loading.monthListLoading,
	settingLoading: state.loading.settingLoading,
});

export default connect(
	mapStateToProps,
	{ getAuth, getMonthList, getSetting }
)(Router);
