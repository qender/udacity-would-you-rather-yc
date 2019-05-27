import actions from './actions';
import { questionThunks } from '../questions';

const setAuthedUser = actions.setAuthedUser;

const unsetAuthedUser = actions.unsetAuthedUser;

const handleLogIn = userId => {
	return (dispatch) => {
		dispatch(setAuthedUser(userId));
		return questionThunks.handleGetQuestions();
	}
};

export default {
	setAuthedUser,
	unsetAuthedUser,
	handleLogIn
};
