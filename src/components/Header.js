import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import WriteModal from '../containers/WriteModalCon';

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

const Header = withRouter(({ location: { pathname }, onLogout, toggle, onSetToggle }) => (
	<>
		<Box>
			<Title>오늘의 일기</Title>
			<Container>
				<Link to="/">
					<Icon className="fas fa-list" pathname={pathname === '/'} />
				</Link>
				<Link to="/year">
					<Icon className="fas fa-calendar-day" pathname={pathname === '/year'} />
				</Link>
				<Icon className="fas fa-pencil-alt" onClick={onSetToggle} />
				<Link to="/setting">
					<Icon className="fas fa-cog" pathname={pathname === '/setting'} />
				</Link>
				<Icon className="fas fa-sign-out-alt" onClick={onLogout} />
			</Container>
		</Box>
		<WriteModal toggle={toggle} onSetToggle={onSetToggle} />
	</>
));

Header.propTypes = {
	onLogout: PropTypes.func,
	toggle: PropTypes.bool,
	onSetToggle: PropTypes.func,
};

export default Header;
