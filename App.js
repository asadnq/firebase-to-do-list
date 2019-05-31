import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'react-native-firebase';

import RootNavigation from './src/navigations';
import NavigationService from './src/navigations/NavigationService';
import store from './src/store/store';
import { setFcmToken } from './src/store/actions/auth';

export default class App extends Component {
  componentDidMount() {
    this.checkToken();
    this.createNotificationListener();
  }

  componentWillUnmount() {
    this.checkToken();
    this.createNotificationListener();
  }

  createNotificationListener = () => {
    const channel = new firebase.notifications.Android.Channel(
      'test-channel',
      'Test Channel',
      firebase.notifications.Android.Importance.Max
    ).setDescription('My apps test channel');
    firebase.notifications().android.createChannel(channel);
    this.notificationListner = firebase
      .notifications()
      .onNotification(notification => {
        const notificationData = new firebase.notifications.Notification()
          .setNotificationId(notification.notificationId)
          .setTitle(notification.title)
          .setBody(notification.body);
        notificationData.android.setChannelId('test-channel');
        firebase.notifications().displayNotification(notificationData);
        console.log(notification);
      });
  };

  checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (!enabled) {
      this.requestPermission();
    }
  };

  requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
    } catch (error) {
      this.requestPermission();
    }
  };
  checkToken = async () => {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      store.dispatch(setFcmToken(fcmToken));
    }else {
      this.checkPermission();
    }
  };
  render() {
    return (
      <Provider store={store}>
        <RootNavigation
          ref={navigationRef => {
            NavigationService.setTopLevelNavigator(navigationRef);
          }}
        />
      </Provider>
    );
  }
}
