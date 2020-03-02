import { ResponsiveLine } from '@nivo/line';
import * as React from 'react';
import ToolTip from '../Tooltip';
import { useDrop } from 'react-dnd'
import ItemTypes from '../../models/ItemTypes';
import styled from 'styled-components';

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

    const isActive = canDrop && isOver;

    return (
        <DustbinStyled ref={drop} isActive={isActive} canDrop={canDrop}>
            <ResponsiveLine
                    onClick={e => console.log('click. ', e)}
                    data={data}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 0, max: 'auto', stacked: true, reverse: false }}
                    curve="natural"
                    axisTop={null}
                    axisRight={null}
                    debugSlices={isActive}
                    onMouseEnter={(_data, event) => {
                        console.log(_data);
                    }}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 10,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Time',
                        legendOffset: 40,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Concentration',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    lineWidth={4}
                    enablePoints={false}
                    pointSize={11}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabel="y"
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'top-right',
                            direction: 'row',
                            justify: false,
                            translateY: -33,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 200,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 20,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    colors={({id, color}) => color}
                    crosshairType="x"
                    enableSlices="x"
                    sliceTooltip={props => {
                    return (
                        <ToolTip
                            name={props.slice.points[0].data.x}
                            fields={[...props.slice.points].reverse().map(point => {
                                return {
                                    color: point.serieColor,
                                    label: String(point.serieId),
                                    value: point.data.y,
                                };
                            })}
                        />);
                    }}
            />
    </DustbinStyled>)
}
    


export default TimeLineChart;
