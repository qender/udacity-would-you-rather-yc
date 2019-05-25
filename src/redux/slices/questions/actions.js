import types from './types';

export const receiveQuestions = (questions) => {
	return {
		type: types.RECEIVE_QUESTIONS,
		questions
	}
};
