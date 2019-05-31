import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';

import { bootstrapUser } from '../../store/actions/auth';
import { bootstrapToDos } from '../../store/actions/todo';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => this.bootstrapAsync(), 1000);
  }

  bootstrapAsync = () => {
    this.props.bootstrapUser();
    this.props.bootstrapToDos();
  };

  render() {
    return (
      <LottieView source={require('../../animations/todo-animation.json')} autoPlay loop />
    );
  }
}

export default connect(
  null,
  { bootstrapUser, bootstrapToDos }
)(SplashScreen);
