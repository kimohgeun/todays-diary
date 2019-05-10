import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAuth } from '../store/auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../containers/LoginCon';
import Main from './Main';

const Router = ({ getAuth, loading, isAuthenticated }) => {
	useEffect(() => {
		getAuth();
	}, {});
	return (
		<BrowserRouter>
			{loading ? (
				'Loading...'
			) : !isAuthenticated ? (
				<Switch>
					<Route exact path="/" component={Login} />
					<Redirect from="*" to="/" />
				</Switch>
			) : (
				<Switch>
					<Route exact path="/" component={Main} />
					<Redirect from="*" to="/" />
				</Switch>
			)}
		</BrowserRouter>
	);
};

Router.propTypes = {
	getAuth: PropTypes.func,
	loading: PropTypes.bool,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
	loading: state.auth.loading,
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
	mapStateToProps,
	{ getAuth }
)(Router);
