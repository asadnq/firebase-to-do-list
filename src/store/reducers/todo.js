const initialState = {
  todos: []
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOTSTRAP_TODOS_FULFILLED':
      return {
        todos: action.payload
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      };
    case 'DELETE_TODO':
      alert(action.payload.id);
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    case 'UPDATE_TODO':
      const updatedToDo = state.todos.map(todo => {
        if (todo.id == action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: updatedToDo
      };
    case 'LOGOUT_FULFILLED':
      return initialState;
    default:
      return state;
  }
};

export default todo;
