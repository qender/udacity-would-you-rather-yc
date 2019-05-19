import { getUsers } from "../../../api/api";
import { receiveUsers } from "./actions";


const handleGetUsers = () => {
	return (dispatch) => {
		return getUsers().then( users => {
			dispatch(receiveUsers(users))
		});
	}
};

export default {
    handleGetUsers
};

