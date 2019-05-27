import { combineReducers } from 'redux'
import users from '../slices/users';
import questions from '../slices/questions';
import authedUser from '../slices/authedUser';

export default combineReducers({
	authedUser,
	users,
	questions
});
