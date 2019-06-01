import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import WriteModal from '../containers/WriteModalCon';
import Notification from './Notification';

const Box = styled.div`
	width: 100%;
	height: 50px;
	background-color: #424242;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 50px;
	position: fixed;
	top: 0px;
	z-index: 1;
`;

const Title = styled.span`
	font-family: 'Jua', sans-serif;
	color: #fff;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 200px;
`;

const Icon = styled.i`
	color: ${props => (props.pathname ? '#fff' : '#9e9e9e')};
	cursor: pointer;
	&:hover {
		color: #fff;
	}
`;

const Header = withRouter(({ location: { pathname }, toggle, onLogout, onToggle }) => (
	<Box>
		<Notification toggle={toggle} />
		<WriteModal />
		<Title>
			<Link to="/">오늘의 일기</Link>
		</Title>
		<Container>
			<Link to="/">
				<Icon className="fas fa-list" pathname={pathname === '/'} />
			</Link>
			<Link to="/year_list">
				<Icon className="fas fa-calendar-day" pathname={pathname === '/year_list'} />
			</Link>
			<Icon className="fas fa-pencil-alt" onClick={onToggle} />
			<Link to="/setting">
				<Icon className="fas fa-cog" pathname={pathname === '/setting'} />
			</Link>
			<Icon className="fas fa-sign-out-alt" onClick={onLogout} />
		</Container>
	</Box>
));

Header.propTypes = {
	toggle: PropTypes.bool,
	onLogout: PropTypes.func,
	onToggle: PropTypes.func,
};

export default Header;
