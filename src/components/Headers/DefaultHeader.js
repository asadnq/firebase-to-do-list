import React from 'react';
import { View, Text, Dimensions, FlatList } from 'react-native';
import styled from 'styled-components';

const { width, height } = Dimensions.get('window');

const Header = styled.View`
  flex-direction: row;
  height: ${height * 0.1}px;
`;

const HeaderLeft = styled.View`
  width: 18%;
  height: 100%;
  background-color: #283a4b;
`;

const HeaderRight = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 82%;
  background-color: #36d290;
  padding: 2% 2% 0% 10%;
`;

const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`;

export default props => {
  return (
    <Header>
      <HeaderLeft >
        {props.headerLeft}
        </HeaderLeft>
      <HeaderRight>
        <HeaderTitle>{props.title}</HeaderTitle>
        {props.headerRight}
      </HeaderRight>
    </Header>
  );
};
