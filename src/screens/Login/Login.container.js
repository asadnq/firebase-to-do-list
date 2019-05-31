import LoginScreen from './Login.screen';
import { connect } from 'react-redux';

import { login } from '../../store/actions/auth';


export default connect(null, { login })(LoginScreen)