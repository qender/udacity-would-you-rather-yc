import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Loader from '../../components/Loader/loader';
import { CircularProgress } from "@material-ui/core";
import { questionThunks } from '../../../redux/slices/questions';

import './question.css';
import QuestionResults from "../QuestionResults/question-results";
import NotFound from "../../pages/NotFound/not-found";


class Question extends Component {
	state = {
		answer: null,
		submittingAnswer: false
	};

	handleAnswerQuestion = () => {
		this.setState({ submittingAnswer: true }, this.answerQuestion());
	};

	answerQuestion = () => {
		const { question, authedUser } = this.props;

		this.props.dispatch(
			questionThunks.answerQuestion({
				authedUser: authedUser.id,
				qid: question.id,
				answer: this.state.answer || authedUser.answers[question.id]
			})
		).then( () => this.setState({ submittingAnswer: false }));
	};

	handleSelectOption = event => {
		this.setState({ answer: event.target.value });
	};


	render() {
		const { question, authedUser, author, canAnswer } = this.props;
		const { answer, submittingAnswer } = this.state;

		const existingAnswer = question ? authedUser.answers[question.id] : null;

		if (!question) {
			return <NotFound />;
		}

		return (
			question ? <div className="q">
				<div className="q__header">
					<div className="q__header_left">
						<Avatar alt={author.name} src={author.avatarURL} />
						<span className="q__header_text">{author.name} asks:</span>
					</div>

					{!canAnswer && <Link to={'/questions/' + question.id}>
						<Button color="primary" variant="contained">
							View Poll
						</Button>
					</Link>}
					{canAnswer &&
						<Button
							color="secondary"
							variant="contained"
							onClick={this.handleAnswerQuestion}
							disabled={!answer || (typeof existingAnswer !== 'undefined')}
						>
							{!submittingAnswer && 'Submit'}
							{submittingAnswer && <CircularProgress color="inherit" size={24} />}
						</Button>
					}

				</div>

				<div className="q__ask">Would you rather:</div>

				<div className="q__options">
					<FormControl
						component="fieldset"
					>
						<RadioGroup
							aria-label="Answers"
							name="answers"
							onChange={this.handleSelectOption}
							value={answer || existingAnswer}
						>
							<FormControlLabel
								disabled={!canAnswer || (typeof existingAnswer !== 'undefined')}
								value="optionOne"
								classes={{root: "q__radio-label"}}
								control={<Radio />}
								label={
									<span>
										<div className="q__radio-label_label">{question.optionOne.text}</div>
										{(canAnswer && existingAnswer) &&
											<QuestionResults
												question={question}
												option="optionOne"
											/>
										}
									</span>
								}
							/>
							<FormControlLabel
								disabled={!canAnswer || (typeof existingAnswer !== 'undefined')}
								value="optionTwo"
								classes={{root: "q__radio-label"}}
								control={<Radio />}
								label={
									<span>
										<div className="q__radio-label_label">{question.optionTwo.text}</div>
										{(canAnswer && existingAnswer) &&
											<QuestionResults
												question={question}
												option="optionTwo"
											/>
										}
									</span>
								}
							/>
						</RadioGroup>
					</FormControl>
				</div>
			</div>
			: <Loader />
		);
	}
}


const mapStateToProps = ({ users, questions, authedUser }, ownProps) => {
	return {
		authedUser: users[authedUser],
		question: questions[ownProps.questionId],
		author: (questions[ownProps.questionId] && Object.keys(users).length && Object.keys(questions).length)
			? users[questions[ownProps.questionId].author]
			: {}
	}
};

export default connect(mapStateToProps)(Question);
