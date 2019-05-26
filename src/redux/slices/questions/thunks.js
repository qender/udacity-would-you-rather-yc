import { getQuestions, saveQuestionAnswer } from "../../../api/api";
import { receiveQuestions, setQuestionAnswer } from './actions';
import { setUserAnswer } from '../users/actions';


const handleGetQuestions = () => {
	return (dispatch) => {
		return getQuestions()
			.then( questions => {
				dispatch(receiveQuestions(questions))
			})
	}
};

const answerQuestion = ({ authedUser, qid, answer }) => {
	return (dispatch, getState) => {
		const { questions, users } = getState();

		// Update question
		const question = questions[qid];
		const updatedQuestion = {...question};

		if (!question[answer].votes.includes(authedUser)) {
			updatedQuestion.optionOne.votes = answer === 'optionOne'
				? [...updatedQuestion.optionOne.votes, authedUser]
				: updatedQuestion.optionOne.votes.filter( userId => userId !== authedUser );

			updatedQuestion.optionTwo.votes = answer === 'optionTwo'
				? [...updatedQuestion.optionTwo.votes, authedUser]
				: updatedQuestion.optionTwo.votes.filter( userId => userId !== authedUser );
		}

		// Update user
		const user = users[authedUser];
		const updatedUser = {...user};
		updatedUser.answers = {
			...updatedUser.answers,
			[qid]: answer
		};

		// Save answer and dispatch updated question and user
		return saveQuestionAnswer({ authedUser, qid, answer })
			.then( () => {
				dispatch(setQuestionAnswer(updatedQuestion));
				dispatch(setUserAnswer(updatedUser));
			})
	}
};

export default {
	handleGetQuestions,
	answerQuestion
};
