import types from './types';
import questionTypes from '../questions/types';


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
		case questionTypes.SAVE_QUESTION:
			return {
				...state,
				[action.author]: {
					...state[action.author],
					questions: [
						...state[action.author].questions,
						action.question.id
					]
				}
			};
		default:
			return state;
	}
}
