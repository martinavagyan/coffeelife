import * as React from 'react';
import styled from 'styled-components';

// import { useDrag } from 'react-dnd'

// function DraggableComponent(props) {
//   const [collectedProps, drag] = useDrag({
//     item: { id, type },
//   })
//   return <Item ref={drag}></Item>
// }

const ItemsView = () => (
  <ItemsContainer>
    <Item id={'A'}>A</Item>
    <Item id={'B'}>B</Item>
    <Item id={'C'}>C</Item>
  </ItemsContainer>
);

const Item = styled.li`
  display: inline-block;
  justify-content: center;  
  margin: 0px 10px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  background: grey;
  justify-self: center;
  border-radius: 10px;
`;

const ItemsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0px;
  padding: 0px;
  height: 50px;
  width: 100%;
  justify-items: center;
  align-items: center;
  border: 2px solid grey;
  border-radius: 8px;
`;

export default ItemsView;