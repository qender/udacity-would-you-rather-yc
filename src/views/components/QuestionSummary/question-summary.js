import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import './question-summary.css';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";


class QuestionSummary extends Component {
	handleSelectOption = () => {
		// TODO: call select option thunk
	};

	render() {
		const { users, disableOptions, selectedAnswer } = this.props;
		const { author, optionOne, optionTwo } = this.props.question;

		const authorObject = users[author];

		return (
			<div className="qs">
				<div className="qs__header">
					<div className="qs__header_left">
						<Avatar alt={authorObject.name} src={authorObject.avatarURL} />
						<span className="qs__header_text">{authorObject.name} asks:</span>
					</div>

					<Link to="/leaderboard">
						<Button color="primary" variant="contained">
							View Poll
						</Button>
					</Link>

				</div>

				<div className="qs__ask">Would you rather:</div>

				<div className="qs__options">
					<FormControl component="fieldset">
						<RadioGroup
							aria-label="Answers"
							name="answers"
							onChange={this.handleSelectOption}
							value={selectedAnswer}
						>
							<FormControlLabel
								disabled={disableOptions}
								value="optionOne"
								control={<Radio />}
								label={optionOne.text}
							/>
							<FormControlLabel
								disabled={disableOptions}
								value="optionTwo"
								control={<Radio />}
								label={optionTwo.text}
							/>
						</RadioGroup>
					</FormControl>
				</div>
			</div>
		);
	}
}


const mapStateToProps = ({ users }, ownProps) => {
	return {
		users
	}
};

export default connect(mapStateToProps)(QuestionSummary);
