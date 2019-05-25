import types from './types';


export default function questions (state = {}, action) {
	switch (action.type) {
		case types.RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			};
		default:
			return state;
	}
};
