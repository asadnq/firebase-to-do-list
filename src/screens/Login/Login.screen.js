import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styled from 'styled-components';

import { Locked, Profile } from '../../components/icons';

const { width, height } = Dimensions.get('window');

const Container = styled.View`
  flex-direction: column;
  background-color: #12243e;
  height: ${height};
`;

const Heading = styled.View`
  height: 43%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeadingText = styled.Text`
  font-size: 32;
  color: #fff;
  font-weight: 900;
  text-transform: capitalize;
`;

const Form = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 28%;
  padding: ${height * 0.01}px ${width * 0.08}px;
`;

const BottomSection = styled.View`
  height: 29%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 8% 12% 10%;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: hsla(215, 16%, 55%, 0.7);
  padding: 2px;
  padding-left: ${width * 0.05}px;
`;

const Input = styled.TextInput`
  background-color: transparent;
  margin-left: ${width * 0.02}px;
  color: #fff;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #36d290;
  padding: ${height * 0.02}px 0;
  flex-direction: row;
  justify-content: center;
`;

const LoginButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: 900;
`;

const ForgotPasswordText = styled.Text`
  text-transform: capitalize;
  text-decoration: underline;
  color: #fff;
  font-weight: 300;
  align-self: flex-end;
`;

const SignUpText = styled.Text`
  color: #36d290;
  font-weight: 900;
  text-transform: uppercase;
`;

const TextBold = styled.Text`
  font-weight: 900;
  color: #fff;
`;

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    };
  }

  submitHandler = () => {
    this.props.login(this.state.control);
  };

  render() {
    const { control } = this.state;
    return (
      <View>
        <Container>
          <Heading>
            <HeadingText>to do list</HeadingText>
          </Heading>
          <Form>
            <InputContainer>
              <Profile size={24} color='#FFf'/>
              <Input
                placeholder="email"
                value={control.email}
                onChangeText={email =>
                  this.setState({ control: { ...control, email } })
                }
              />
            </InputContainer>
            <InputContainer>
              <Locked size={24} color='#fff'/>
              <Input
                placeholder="password"
                value={control.password}
                onChangeText={password =>
                  this.setState({ control: { ...control, password } })
                }
                secureTextEntry
              />
            </InputContainer>
            <LoginButton onPress={this.submitHandler}>
              <LoginButtonText>Member login !</LoginButtonText>
            </LoginButton>
          </Form>
          <BottomSection>
            <ForgotPasswordText>Forgot Password ?</ForgotPasswordText>
            <TextBold>
              Don't Have Any Account? <SignUpText>Sign up now</SignUpText>{' '}
            </TextBold>
          </BottomSection>
        </Container>
      </View>
    );
  }
}
