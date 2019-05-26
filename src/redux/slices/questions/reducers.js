import types from './types';


export default function questions (state = {}, action) {
	switch (action.type) {
		case types.RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			};
		case types.SET_QUESTION_ANSWER:
			return {
				...state,
				[action.updatedQuestion.id]: action.updatedQuestion
			};
		case types.SAVE_QUESTION:
			return {
				...state,
				[action.question.id]: action.question
			};
		default:
			return state;
	}
};
