import types from './types';


export default function users (state = {}, action) {
	switch(action.type) {
		case types.RECEIVE_USERS:
			return {
				...state,
				...action.users
			};
		case types.SET_USER_ANSWER:
			return {
				...state,
				[action.updatedUser.id]: action.updatedUser
			};
		default:
			return state;
	}
}
