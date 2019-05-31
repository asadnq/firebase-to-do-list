import { connect } from 'react-redux';

import HomeScreen from './Home.screen';
import { bootstrapToDos } from '../../store/actions/todo';
import { logout } from '../../store/actions/auth';

const mapState = state => ({
  todos: state.todo.todos
});

export default connect(mapState, { bootstrapToDos, logout })(HomeScreen);