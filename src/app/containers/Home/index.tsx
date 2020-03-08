import * as React from 'react';
import styled from 'styled-components';
import TimeLine from '../../components/TimeLine';
// import ItemsContainer from '../../components/ItemsView';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import DragDropSandbox from '../../components/DragDropSandbox';
import { isMobile } from 'react-device-detect';

const Home = () => (
	<DndProvider backend={isMobile ? TouchBackend : Backend}>
		<HomeStyled>
			<DragDropSandbox />
			<ChartWrapper>
				<TimeLine data={[]} />
			</ChartWrapper>
		</HomeStyled>
	</DndProvider>
);

const ChartWrapper = styled.div`
	width: 100vw;
	height: 50vh;
	max-height: 500px;
	margin: 0 auto;
`;

const HomeStyled = styled.div``;

export default Home;
