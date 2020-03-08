import styled from 'styled-components';

export const Title = styled.h1`
	margin: 6px 0 4px;
	font-size: 1em;
	color: #fff;
`;

export const Color = styled.span`
	display: inline-block;
	width: 12px;
	height: 12px;
	background: ${(props) => props.color};
	margin-right: 6px;
`;

export const Text = styled.span`
	font-size: 1em;
	display: inline-block;
	color: #fff;
	margin: 0;
`;

export const Field = styled.div`
	display: flex;
	align-items: center;
`;

export const Wrapper = styled.div`
	background: rgba(0, 0, 0, 0.5);
	padding: 10px;
	border-radius: 4px;
`;
