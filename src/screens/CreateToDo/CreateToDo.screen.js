import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { firebaseAPI } from '../../config/api.config';

const { width, height } = Dimensions.get('window');

const Body = styled.View`
  margin-top: ${height * 0.025}px;
`;

const Form = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: ${height * 0.01}px ${width * 0.02}px;
  height: ${height * 0.37};
`;

const FormGroup = styled.View`
  flex-direction: column;
`;

const InputContainer = styled.View`
  width: 100%;
  height: ${height * 0.075};
`;

const TextAreaContainer = styled.View`
  flex-direction: column;
  width: 100%;
  height: ${height * 0.2};
`;

const Label = styled.Text`
  color: #555;
  font-weight: 900;
`;

const FormInput = styled.TextInput`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #f3f3f3;
  border: 1px #e9e9e9;
  border-radius: 2px;
`;

const SaveText = styled.Text`
  color: #cff;
  font-weight: 900;
  margin: 20px;
`;

export default class CreateToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: {
        title: '',
        description: ''
      }
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#36d290'
      },
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam('addToDo')}>
          <SaveText>Save</SaveText>
        </TouchableOpacity>
      ),
      title: 'Create To-do',
      titleStyle: {
        color: '#FFF'
      }
    };
  };

  addToDo = async () => {
    const { title, description } = this.state.control;
    const requestBody = {
     to: this.props.fcmToken,
      collapse_key : "type_a",
      notification: {
        body: `title: ${title} description: ${description}`,
        title: 'a todo has been successfully created'
      },
      priority: 'high'
    };
    await firebaseAPI.post('/send', requestBody).then(res => {
      if (res.data.failure > 0) {
        alert('failed sending notification');
      }
      if(res.data.success > 0) {
        alert(" success sending notification")
      }
    });
    this.props.storeToDo(this.state.control)
  };

  componentDidMount() {
    this.props.navigation.setParams({
      addToDo: () => this.addToDo()
    });
  }

  render() {
    return (
      <View>
        <Body>
          <Form>
            <FormGroup>
              <Label>Title</Label>
              <InputContainer>
                <FormInput
                  onChangeText={title =>
                    this.setState({ control: { ...this.state.control, title } })
                  }
                  value={this.state.control.title}
                />
              </InputContainer>
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <TextAreaContainer>
                <FormInput
                  textAlignVertical="top"
                  multiline
                  onChangeText={description =>
                    this.setState({
                      control: { ...this.state.control, description }
                    })
                  }
                  value={this.state.control.description}
                />
              </TextAreaContainer>
            </FormGroup>
          </Form>
        </Body>
      </View>
    );
  }
}
