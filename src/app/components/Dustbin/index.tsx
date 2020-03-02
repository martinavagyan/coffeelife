import * as React from 'react';
import { useDrop } from 'react-dnd'
import ItemTypes from '../../models/ItemTypes'
import styled from 'styled-components';

const DustbinStyled = styled.div`
  height: 12rem;
  width: 12rem;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  line-height: normal;
  float: left;
  background: ${({isActive, canDrop}) => isActive ? 'blue' : canDrop ? 'green' : 'red'};
`;

const Dustbin = () => {
  const [{ canDrop, isOver, result }, drop] = useDrop({
    accept: ItemTypes.CAFFEINE,
    drop: () => ({ name: 'Dustbin' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      result: monitor.getDropResult(),
    }),
  })

  console.log(result);
  const isActive = canDrop && isOver;

  return (
    <DustbinStyled ref={drop} isActive={isActive} canDrop={canDrop}>
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </DustbinStyled>
  )
}

export default Dustbin
