import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './home';

class HomeContainer extends Component {
	render() {
		const { questions, authedUser } = this.props;

		return (
			<Home
				questions={questions}
				authedUser={authedUser}
			/>
		)
	}
}

const mapStateToProps = ({ questions, users, authedUser }) => {
	return {
		questions: Object.keys(questions).map(questionId => questions[questionId]),
		authedUser: users[authedUser]
	}
};

export default connect(mapStateToProps)(HomeContainer);
