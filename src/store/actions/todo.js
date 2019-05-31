import NavigationService from '../../navigations/NavigationService';
import AsyncStorage from '@react-native-community/async-storage';

import store from '../store';

export const bootstrapToDos = () => async dispatch => {
  try {
    const retrievedItem = await AsyncStorage.getItem('todos');
    const todos = JSON.parse(retrievedItem);
    if (todos !== null) {
      console.log(todos);
      dispatch({
        type: 'BOOTSTRAP_TODOS_FULFILLED',
        payload: todos
      });
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};

export const storeToDo = todo => async dispatch => {
  try {
    const data = {
      id: Math.ceil(Math.random() * 20),
      ...todo
    };
    const newToDos = [...store.getState().todo.todos, data];
    await AsyncStorage.setItem('todos', JSON.stringify(newToDos));
    return dispatch(addToDo(data));
  } catch (err) {
    console.log('error', err);
  }
};

export const addToDo = data => {
  NavigationService.back();
  return {
    type: 'ADD_TODO',
    payload: data
  };
};

export const deleteToDo = todo => {
  return {
    type: 'DELETE_TODO',
    payload: todo
  };
};

export const updateToDo = todo => {
  return {
    type: 'UPDATE_TODO',
    payload: todo
  };
};

export const filterByStatus = status => {
  let payload;
  if (status == 1) {
    payload = true;
  } else {
    payload = false;
  }

  return {
    type: 'FILTER_BY_STATUS',
    payload
  };
};

export const filterByCategory = id => {
  return {
    type: 'FILTER_BY_CATEGORY',
    payload: id
  };
};

export const updateToDoStatus = todo => {
  return {
    type: 'UPDATE_TODO_STATUS',
    payload: todo
  };
};
