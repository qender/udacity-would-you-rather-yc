import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Loader from '../../components/Loader/loader';
import {CircularProgress} from "@material-ui/core";
import { questionThunks } from '../../../redux/slices/questions';

import './question.css';


class Question extends Component {
	state = {
		answer: null,
		submittingAnswer: false,
		redirectToHome: false
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
		).then( () => this.setState({ submittingAnswer: false, redirectToHome: true }));
	};

	handleSelectOption = event => {
		this.setState({ answer: event.target.value });
	};


	render() {
		const { question, authedUser, author, canAnswer } = this.props;
		const { answer, submittingAnswer, redirectToHome } = this.state;

		if (redirectToHome) {
			return <Redirect to="/" />;
		}

		return (
			question ? <div className="qs">
				<div className="qs__header">
					<div className="qs__header_left">
						<Avatar alt={author.name} src={author.avatarURL} />
						<span className="qs__header_text">{author.name} asks:</span>
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
							disabled={!answer && !authedUser.answers[question.id]}
						>
							{!submittingAnswer && 'Submit'}
							{submittingAnswer && <CircularProgress color="inherit" size={24} />}
						</Button>
					}

				</div>

				<div className="qs__ask">Would you rather:</div>

				<div className="qs__options">
					<FormControl component="fieldset">
						<RadioGroup
							aria-label="Answers"
							name="answers"
							onChange={this.handleSelectOption}
							value={answer || authedUser.answers[question.id]}
						>
							<FormControlLabel
								disabled={!canAnswer}
								value="optionOne"
								control={<Radio />}
								label={question.optionOne.text}
							/>
							<FormControlLabel
								disabled={!canAnswer}
								value="optionTwo"
								control={<Radio />}
								label={question.optionTwo.text}
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
		author: (Object.keys(users).length && Object.keys(questions).length)
			? users[questions[ownProps.questionId].author]
			: {}
	}
};

export default connect(mapStateToProps)(Question);
