import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	text-align: center;
	margin: 50px;
	color: #bdbdbd;
	display: flex;
	flex-direction: column;
`;

const Emoticon = styled.span`
	display: block;
	font-size: 5rem;
	margin: 50px;
`;

const Null = ({ icon, text }) => (
	<Container>
		<Emoticon>
			<i className={icon} />
		</Emoticon>
		<span>{text}</span>
	</Container>
);

Null.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string,
};

export default Null;
