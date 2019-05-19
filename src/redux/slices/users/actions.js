import types from './types';


export function receiveUsers(users) {
	return {
		type: types.RECEIVE_USERS,
		users
	}
}
