import { ResponsiveLine } from '@nivo/line';
import * as React from 'react';
import styled from 'styled-components';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`
const TimeLineChart = ({ data /* see data tab */ }) => (
  <Wrapper
    onDragOver= {e => console.log('drop. ', e)}
  >
  <ResponsiveLine
      onClick={e => console.log('click. ', e)}
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      curve="natural"
      axisTop={null}
      axisRight={null}
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
      colors={{ scheme: 'nivo' }}
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
              anchor: 'top',
              direction: 'row',
              justify: false,
              translateX: 100,
              translateY: -33,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 82,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 15,
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
  />
  </Wrapper>
)

export default TimeLineChart;
