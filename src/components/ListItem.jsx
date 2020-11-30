import React, { useState, useEffect } from 'react';
import { Button, View, Text, Input } from '@tarojs/components';
import { styled } from 'linaria/react';

import MENU from '../data/menu';


const ListItem = () => {
  const [cartItem, setCartItem] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setCartItem((prevState) => [
      ...prevState,
      {
        name: e.currentTarget.dataset.text,
        quantity: 1,
      }
    ]);
  };

  return (
    <>
      {MENU.map(item => (
        <Title>
          <Button type="button" key={item.id} data-text={item.name} onClick={handleClick}>{item.name}</Button>
        </Title>
      ))}
    </>
  )
};

export default ListItem;

const Title = styled(View)`
  color: red;
`;
