import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

const Box = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
`;

const Icon = styled.i`
	font-size: 2rem;
	animation: ${spin} 1.5s linear infinite;
`;

const Loading = () => (
	<Box>
		<Icon className="fas fa-spinner" />
	</Box>
);

export default Loading;
