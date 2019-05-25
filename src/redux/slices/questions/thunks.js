import { getQuestions } from "../../../api/api";
import { receiveQuestions } from './actions';


const handleGetQuestions = () => {
	return (dispatch) => {
		return getQuestions().then( questions => {
			dispatch(receiveQuestions(questions))
		});
	}
};

export default {
	handleGetQuestions
};
