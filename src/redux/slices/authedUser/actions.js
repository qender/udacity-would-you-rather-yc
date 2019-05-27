import types from './types';

const setAuthedUser = (userId) => {
	return {
		type: types.SET_AUTHED_USER,
		userId
	}
};

const unsetAuthedUser = () => {
	return {
		type: types.UNSET_AUTHED_USER
	}
};

export default {
	setAuthedUser,
	unsetAuthedUser
};
