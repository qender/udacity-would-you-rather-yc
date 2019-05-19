import types from './types';


export default function users (state = {}, action) {
	switch(action.type) {
		case types.RECEIVE_USERS:
			return {
				...state,
				...action.users
			};
		default:
			return state;
	}
}
