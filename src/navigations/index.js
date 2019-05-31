import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';

import HomeScreen from '../screens/Home/Home.container';
import CreateToDoScreen from '../screens/CreateToDo/CreateToDo.container';
import LoginScreen from '../screens/Login/Login.container';
import SplashScreen from '../screens/Splash/Splash.screen';

const mainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    CreateToDo: {
      screen: CreateToDoScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const switchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: mainStack
    },
    Splash: {
      screen: SplashScreen
    }
  },
  {
    initialRouteName: 'Splash'
  }
);

const root = createAppContainer(switchNavigator);

export default root;
