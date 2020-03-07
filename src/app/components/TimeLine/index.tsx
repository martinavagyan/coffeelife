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
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    color: white;
    padding: 1rem;
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
          name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
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
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </DustbinStyled>

    )
}

export default TimeLineChart;
