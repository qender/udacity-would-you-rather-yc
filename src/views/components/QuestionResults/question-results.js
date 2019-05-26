import React from 'react';
import {LinearProgress, withStyles} from "@material-ui/core";

import './question-results.css';


const QuestionResults = props => {
	const { question, option } = props;

	const optionOneVotes = question.optionOne.votes.length;
	const optionTwoVotes = question.optionTwo.votes.length;

	const optionVotes = option === 'optionOne' ? optionOneVotes : optionTwoVotes;
	const totalVotes = optionOneVotes + optionTwoVotes;
	const percentage = Math.round(optionVotes / totalVotes * 100);

	const BorderLinearProgress = withStyles({
		root: {
			height: 10,
			marginBottom: 5,
			marginTop: 10,
			width: 250,
			borderRadius: 20,
			backgroundColor: '#e6e4e9',
		},
		bar: {
			borderRadius: 20,
			backgroundColor: '#ff6c5c',
		},
	})(LinearProgress);

	return (
		<div>
			<BorderLinearProgress
				variant="determinate"
				value={percentage}
			/>
			<div className="qr__votes">{optionVotes}/{totalVotes} votes ({percentage}%)</div>
		</div>
	);
};

export default QuestionResults;
