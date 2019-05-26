import types from './types';


export const receiveUsers = (users) => {
	return {
		type: types.RECEIVE_USERS,
		users
	}
};

export const setUserAnswer = (updatedUser) => {
	return {
		type: types.SET_USER_ANSWER,
		updatedUser
	}
};
