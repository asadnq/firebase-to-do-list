import axios from 'axios';
import NavigationService from '../../navigations/NavigationService';
import AsyncStorage from '@react-native-community/async-storage';

/*{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
*/
const reqres = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

const storeUserToken = async data => {
  try {
    await AsyncStorage.setItem('userToken', data);
    const test = await AsyncStorage.getItem('userToken');
    console.log(JSON.parse(test));
  } catch (err) {
    console.log(err);
  }
};

export const bootstrapUser = () => async dispatch => {
  try {
    const retrievedItem = await AsyncStorage.getItem('userToken');
    const userToken = JSON.parse(retrievedItem);
    if (userToken !== null) {
      NavigationService.navigate('Home');
      dispatch({
        type: 'BOOTSTRAP_USER_FULFILLED',
        payload: userToken
      });
    } else {
      NavigationService.navigate('Login');
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = user => dispatch => {
 reqres
    .post('/login', user)
    .then(res => {
      NavigationService.navigate('Home');
      dispatch({ type: 'LOGIN_FULFILLED', payload: res });
      storeUserToken(JSON.stringify({ userToken: res }));
    })
    .catch(err => console.log(err));
};

export const logout = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('todos');
    NavigationService.navigate('Splash');
    return dispatch({ type: 'LOGOUT_FULFILLED' });
  } catch (err) {
    console.log(err);
  }
};

export const setFcmToken = token => {
  return {
    type: 'SET_FCM_TOKEN',
    payload: token
  };
};
