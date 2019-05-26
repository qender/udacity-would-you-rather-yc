import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Loader from '../../components/Loader/loader';
import Question from '../../components/Question/question';

import './home.css';


class Home extends Component {
	state = {
		selectedTab: 0
	};

	handleChange = (event, selectedTab) => {
		this.setState({ selectedTab });
	};

	render() {
		const { selectedTab } = this.state;
		const { authedUser, questions } = this.props;
		const gettingQuestions = Object.keys(questions).length === 0;

		let answeredQuestions = [];
		let unansweredQuestions = [];
		const userAnswers = Object.keys(authedUser.answers);
		questions.forEach(question => {
			if (userAnswers.includes(question.id)) {
				answeredQuestions.push(question);
			} else {
				unansweredQuestions.push(question);
			}
		});


		return (
			<section className="page">
				<AppBar position="static">
					<Tabs
						value={selectedTab}
						onChange={this.handleChange}
						variant="fullWidth"
					>
						<Tab label="Unanswered Questions" />
						<Tab label="Answered Questions" />
					</Tabs>
				</AppBar>

				<div className="page-content">
					{selectedTab === 0 && <div>
						{gettingQuestions && <Loader />}
						{!gettingQuestions && unansweredQuestions.map(question => (
							<Question
								key={question.id}
								questionId={question.id}
								canAnswer={false}
							/>
						))}
						{(!gettingQuestions && unansweredQuestions.length === 0) &&
							<div className="home__no-questions">No unanswered questions</div>
						}
					</div>}

					{selectedTab === 1 && <div>
						{gettingQuestions && <Loader />}
						{!gettingQuestions && answeredQuestions.map(question => (
							<Question
								key={question.id}
								questionId={question.id}
								canAnswer={false}
							/>
						))}
						{(!gettingQuestions && answeredQuestions.length === 0) &&
							<div className="home__no-questions">No questions answered</div>
						}
					</div>}
				</div>
			</section>
		);
	}
}

export default Home;
