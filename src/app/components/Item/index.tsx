import * as React from 'react';
import styled from 'styled-components';
import { useDrag, DragSourceMonitor } from 'react-dnd'
import ItemTypes from '../../models/ItemTypes';

const Item = ({name}) => {
  const [{ isDragging }, drag] = useDrag({
    item: {name, type: ItemTypes.CAFFEINE},
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult()
      if(item && dropResult) {
        console.log(`dropped ${item.name} in ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <ItemStyled ref={drag} isDragging={isDragging}>
      {name}
    </ItemStyled>
  )
}

const ItemStyled = styled.li`
  display: inline-block;
  justify-content: center;  
  margin: 0px 10px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  background: white;
  justify-self: center;
  border-radius: 10px;
  border: 1px dashed gray;
  padding: 0.5rem 1rem;
  margin-right: 1.5rem;
  cursor: move;
  opacity: ${props => props.isDragging ? 0.4 : 1};
`;

export default Item;