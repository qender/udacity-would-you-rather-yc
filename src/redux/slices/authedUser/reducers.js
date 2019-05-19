import types from './types';

export default function authedUser (state=null, action) {
	switch (action.type) {
		case types.SET_AUTHED_USER:
			return action.userId;
		case types.UNSET_AUTHED_USER:
			return null;
		default:
			return state;
	}
}
