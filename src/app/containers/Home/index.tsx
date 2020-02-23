import * as React from 'react';
import styled from 'styled-components';
import TimeLine from '../../components/TimeLine';
// import ItemsContainer from '../../components/ItemsView';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'
import DragDropSandbox from '../../components/DragDropSandbox';
import {isMobile} from 'react-device-detect';


const data = [
  {
    "id": "Melatonin production (pg/ml)",
    "color": "rgba(144, 144, 144, 0.9)",
    "data": [
      {
        "x": "8:00am",
        "y": 8.25
      },
      {
        "x": "10:00am",
        "y": 8.1
      },
      {
        "x": "12:00am",
        "y": 8
      },
      {
        "x": "14:00pm",
        "y": 8.15
      },
      {
        "x": "16:00pm",
        "y": 8.25
      },
      {
        "x": "18:00pm",
        "y": 9
      },
      {
        "x": "20:00pm",
        "y": 12.25
      },
      {
        "x": "22:00pm",
        "y": 22
      },
      {
        "x": "24:00pm",
        "y": 55
      },
      {
        "x": "2:00am",
        "y": 70
      },
      {
        "x": "4:00am",
        "y": 50
      },
      {
        "x": "6:00am",
        "y": 20
      },
    ]
  },
]

const Home = () => (
  <DndProvider backend={isMobile ? TouchBackend : Backend}>
    <HomeStyled>
      <DragDropSandbox />
      <ChartWrapper>
        <TimeLine data={data}/>
      </ChartWrapper>
    </HomeStyled>
	</DndProvider>
);

const ChartWrapper = styled.div`
  width: 100vw;
  height: 50vh;
  margin: 0 auto;
`;

const HomeStyled = styled.div`

`;

export default Home;
