import { combineReducers } from 'redux'
import users from '../slices/users';
import authedUser from '../slices/authedUser';

export default combineReducers({
	authedUser,
	users
});
