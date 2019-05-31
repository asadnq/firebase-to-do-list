import { connect } from 'react-redux';

import { addToDo, storeToDo } from '../../store/actions/todo';
import CreateToDoScreen from './CreateToDo.screen';

const mapState = state => {
    return {
        fcmToken: state.auth.fcmToken
    }
}

export default connect(mapState, { addToDo, storeToDo })(CreateToDoScreen)