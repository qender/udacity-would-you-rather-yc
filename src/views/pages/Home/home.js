import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Loader from '../../components/Loader/loader';
import QuestionSummary from '../../components/QuestionSummary/question-summary';

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
							<QuestionSummary
								key={question.id}
								question={question}
								disableOptions={true}
							/>
						))}
					</div>}


					{selectedTab === 1 && <div>
						{gettingQuestions && <Loader />}
						{!gettingQuestions && answeredQuestions.map(question => (
							<QuestionSummary
								key={question.id}
								question={question}
								selectedAnswer={authedUser.answers[question.id]}
								disableOptions={true}
							/>
						))}
					</div>}
				</div>
			</section>
		);
	}
}

export default Home;
