import types from './types';


export const receiveUsers = (users) => {
	return {
		type: types.RECEIVE_USERS,
		users
	}
};
