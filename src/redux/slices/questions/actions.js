import types from './types';

export const receiveQuestions = (questions) => {
	return {
		type: types.RECEIVE_QUESTIONS,
		questions
	}
};

export const setQuestionAnswer = (updatedQuestion) => {
	return {
		type: types.SET_QUESTION_ANSWER,
		updatedQuestion
	}
};

export const saveNewQuestion = question => {
	return {
		type: types.SAVE_QUESTION,
		question
	}
};
