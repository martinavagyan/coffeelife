import * as React from 'react';
import { useDrop } from 'react-dnd'
import ItemTypes from '../../models/ItemTypes';
import styled from 'styled-components';

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  } from 'recharts';

const DustbinStyled = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
    font-size: 1rem;
    line-height: normal;
    float: left;
    background: ${({isActive, canDrop}) => isActive ? 'white' : canDrop ? 'white' : 'white'};
`;

const TimeLineChart = ({ data /* see data tab */ }) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.CAFFEINE,
        drop: () => ({ name: 'Dustbin' }),
        collect: monitor => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
          result: monitor.getDropResult(),
        }),
    })

    data = [
        {
            name: '8:00 AM', mel: 8.25, cafe: 20,
        },
        {
            name: '10:00 AM', mel: 8.1, cafe: 30,
        },
        {
            name: '12:00 PM', mel: 8, cafe: 40,
        },
        {
            name: '14:00 PM', mel: 8.15, cafe: 40,
        },
        {
            name: '16:00 PM', mel: 8.25, cafe: 30,
        },
        {
            name: '18:00 PM', mel: 9, cafe: 50,
        },
        {
            name: '20:00 PM', mel: 12.25, cafe: 30,
        },
        {
            name: '22:00 PM', mel: 22, cafe: 25,
        },
        {
            name: '00:00 AM', mel: 55, cafe: 15,
        },
        {
            name: '02:00 AM', mel: 70, cafe: 10,
        },
        {
            name: '04:00 AM', mel: 50, cafe: 5,
        },
        {
            name: '06:00 AM', mel: 20, cafe: 2,
        },
      ];

    const isActive = canDrop && isOver;

    return (
        <DustbinStyled ref={drop} isActive={isActive} canDrop={canDrop}>
            <ResponsiveContainer>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mel" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="cafe" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </DustbinStyled>

    )
}

export default TimeLineChart;
