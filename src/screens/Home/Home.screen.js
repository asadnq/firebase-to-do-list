import React from 'react';
import { View, Text, Dimensions, FlatList } from 'react-native';
import styled from 'styled-components';
import ListTodo from '../../components/Lists/ListToDo';

import Header from '../../components/Headers/DefaultHeader';
import { Logout } from '../../components/icons';

const { width, height } = Dimensions.get('window');

const Body = styled.View`
  margin-top: ${height * 0.025}px;
`;

const AddToDoButton = styled.TouchableOpacity`
  width: 15%;
`;

const AddToDoText = styled.Text`
  color: #fff;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center
`;

const LogoutWrapper = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LogoutText = styled.Text`
  color: #fff;
  font-weight: 600;
`;

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  render() {
    return (
      <View>
        <Header
          title="Your dashboard"
          headerRight={
            <AddToDoButton
              onPress={() => this.props.navigation.navigate('CreateToDo')}
            >
              <AddToDoText>add new</AddToDoText>
            </AddToDoButton>
          }
          headerLeft={
            <LogoutWrapper onPress={() => this.props.logout()}>
              <Logout size={32} color="#FFF" />
              <LogoutText>Log out</LogoutText>
            </LogoutWrapper>
          }
        />
        <Body>
          <FlatList
            data={this.props.todos}
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              return <ListTodo {...item} />;
            }}
          />
        </Body>
      </View>
    );
  }
}
