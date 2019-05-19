const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log("action", action);
	const returnVal = next(action);
	console.log("new state", store.getState());
	console.groupEnd();
	return returnVal;
};

export default logger;
