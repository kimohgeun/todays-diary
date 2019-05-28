import React from 'react';
import styled from 'styled-components';

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

export default Null;
