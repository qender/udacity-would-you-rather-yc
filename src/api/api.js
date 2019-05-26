import { _getUsers, _getQuestions, _saveQuestionAnswer } from "../_DATA";

export function getUsers () {
	return _getUsers();
}

export function getQuestions () {
	return _getQuestions();
}

export function saveQuestionAnswer ({ authedUser, qid, answer }) {
	return _saveQuestionAnswer({ authedUser, qid, answer });
}
