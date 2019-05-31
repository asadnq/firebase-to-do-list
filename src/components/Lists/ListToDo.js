import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import styled from 'styled-components';

const { width, height } = Dimensions.get('window');

const ListContainer = styled.View`
  width: 50%;
  height: ${height * 0.15};
  padding: 0 2.8%;
  margin-bottom: ${height * .025}px;
`;

const List = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  height: 100%;
  border: 1px #e9e9e9;
`;

const Title = styled.Text`
  font-size: 22px;
  color: #1e2f42;
  text-transform: capitalize;
  font-weight: 900;
`;

const Description = styled.Text`
  font-size: 9px;
  color: #1e2f42;
  text-transform: capitalize;
  font-weight: 500;
  max-width: 50%; w
`

export default props => {
  return (
    <ListContainer>
      <List>
        <Description elipsizeMode='tail' numberOfLines={1}>{props.description}</Description>
        <Title>{props.title}</Title>
      </List>
    </ListContainer>
  );
};
