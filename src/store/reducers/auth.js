const initialState = {
  userToken: null,
  fcmToken: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOTSTRAP_USER_FULFILLED':
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        userToken: action.payload
      }
    case 'LOGOUT_FULFILLED':
      return initialState;
    case 'SET_FCM_TOKEN':
      return {
        ...state,
        fcmToken: action.payload
      };
    default:
      return state;
  }
};

export default auth;
