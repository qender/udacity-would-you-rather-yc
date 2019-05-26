import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from "../_DATA";

export function getUsers () {
	return _getUsers();
}

export function getQuestions () {
	return _getQuestions();
}

export function saveQuestionAnswer ({ authedUser, qid, answer }) {
	return _saveQuestionAnswer({ authedUser, qid, answer });
}

export function saveQuestion (question) {
	return _saveQuestion(question);
}
