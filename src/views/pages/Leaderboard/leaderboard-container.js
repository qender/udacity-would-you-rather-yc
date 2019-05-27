import React, { Component } from 'react';
import Leaderboard from "./leaderboard";
import { connect } from 'react-redux';


class LeaderboardContainer extends Component {
	render() {
		const { users } = this.props;

		return (
			<Leaderboard users={users} />
		)
	}
}

const mapStateToProps = ({ users, questions }) => {
	// Get users who answered each question
	const userAnswersPerQuestion = Object.keys(questions).map(questionId => {
		return questions[questionId].optionOne.votes.concat(questions[questionId].optionTwo.votes);
	});

	// Map users array with number of questions answered
	const usersArr = Object.keys(users).map(userId => users[userId]);
	usersArr.forEach(user => {
		user.numAnswers = userAnswersPerQuestion.filter(users => users.includes(user.id)).length
	});

	return {
		users: usersArr
	}
};

export default connect(mapStateToProps)(LeaderboardContainer);
