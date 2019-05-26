import { getQuestions, saveQuestionAnswer, saveQuestion } from "../../../api/api";
import { receiveQuestions, setQuestionAnswer, saveNewQuestion } from './actions';
import { setUserAnswer } from '../users/actions';


const handleGetQuestions = () => {
	return (dispatch) => {
		return getQuestions()
			.then( questions => {
				dispatch(receiveQuestions(questions))
			})
	}
};

const createQuestion = (optionOneText, optionTwoText) => {
	return (dispatch, getState) => {
		const author = getState().authedUser;

		return saveQuestion({optionOneText, optionTwoText, author})
			.then( question => {
				dispatch(saveNewQuestion(question))
			})
	}
};

const answerQuestion = ({ authedUser, qid, answer }) => {
	return (dispatch, getState) => {
		const { questions, users } = getState();

		// Update question
		const question = questions[qid];
		const updatedQuestion = {...question};
		const otherAnswer = answer === 'optionOne' ? 'optionTwo' : 'optionOne';
		updatedQuestion[answer].votes = [...new Set(updatedQuestion[answer].votes), authedUser];
		updatedQuestion[otherAnswer].votes = [...new Set(updatedQuestion[otherAnswer].votes)];


		// Update user
		const user = users[authedUser];
		const updatedUser = {...user};
		updatedUser.answers = {
			...updatedUser.answers,
			[qid]: answer
		};

		// Save answer and dispatch updated question and user
		return saveQuestionAnswer({ authedUser, qid, answer })
			.then( (response) => {
				dispatch(setQuestionAnswer(updatedQuestion));
				dispatch(setUserAnswer(updatedUser));
			})
	}
};

export default {
	handleGetQuestions,
	answerQuestion,
	createQuestion
};
