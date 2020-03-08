import React, {useRef} from 'react';
import { useDrop } from 'react-dnd';
import ItemTypes from '../../models/ItemTypes';
import styled from 'styled-components';
import _ from 'lodash';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts';

const DustbinStyled = styled.div`
	width: 100%;
	height: 100%;
	color: white;
	text-align: center;
	font-size: 1rem;
	line-height: normal;
	float: left;
	background: ${({ isActive, canDrop }) =>
		isActive ? 'white' : canDrop ? 'white' : 'white'};
`;

const TimeLineChart = ({ data /* see data tab */ }) => {
	const [{ canDrop, isOver }, drop] = useDrop({
		accept: ItemTypes.CAFFEINE,
		drop: () => ({ name: 'Dustbin' }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
			result: monitor.getDropResult(),
		}),
	});

	data = [
		{
			name: '8',
			mel: 8.25,
			cafe: 20
		},
		{
			name: '9',
			mel: 8.2,
			cafe: 20
		},
		{
			name: '10',
			mel: 8.1,
			cafe: 30
		},
		{
			name: '11',
			mel: 8.05,
			cafe: 30
		},
		{
			name: '12',
			mel: 8,
			cafe: 40
		},
		{
			name: '13',
			mel: 8.1,
			cafe: 40
		},
		{
			name: '14',
			mel: 8.15,
			cafe: 40
		},
		{
			name: '15',
			mel: 8.2,
			cafe: 30
		},
		{
			name: '16',
			mel: 8.25,
			cafe: 30
		},
		{
			name: '17',
			mel: 8.4,
			cafe: 30
		},
		{
			name: '18',
			mel: 9,
			cafe: 50
		},
		{
			name: '19',
			mel: 11.45,
			cafe: 30
		},
		{
			name: '20',
			mel: 12.25,
			cafe: 30
		},
		{
			name: '21',
			mel: 16,
			cafe: 30
		},
		{
			name: '22',
			mel: 22,
			cafe: 25
		},
		{
			name: '24',
			mel: 40,
			cafe: 15
		},
		{
			name: '1',
			mel: 55,
			cafe: 15
		},
		{
			name: '2',
			mel: 65,
			cafe: 10
		},
		{
			name: '3',
			mel: 71,
			cafe: 10
		},
		{
			name: '4',
			mel: 64,
			cafe: 5
		},
		{
			name: '5',
			mel: 50,
			cafe: 5
		},
		{
			name: '6',
			mel: 20,
			cafe: 2
		},
		{
			name: '7',
			mel: 9,
			cafe: 2
		}
	];

	const isActive = canDrop && isOver;

	const chartRef = useRef(null);

	if (isActive) {
		console.log(chartRef.current.handleMouseMove);
		console.log(drop)
	}
	const handleMove = _.debounce((data) => console.log('mouse over: ', data), 100)

	return (
		<DustbinStyled ref={drop} isActive={isActive} canDrop={canDrop}>
			<ResponsiveContainer >
				<LineChart 
									onMouseMove={handleMove}
									ref={chartRef} width={500} height={300} data={data} 
									onClick={(data) => console.log('click: ', data)}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						activeDot={{r: 8 , onClick: (prop) => console.log('this: ', prop) }}
						type="monotone"
						dataKey="mel"
						stroke="#8884d8"
					/>
					<Line type="monotone" dataKey="cafe" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</DustbinStyled>
	);
};

export default TimeLineChart;
