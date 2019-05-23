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

const Null = () => (
	<Container>
		<Emoticon>ʕ•ﻌ•ʔ</Emoticon>
		<span>아직 작성된 일기가 없습니다.</span>
	</Container>
);

export default Null;
