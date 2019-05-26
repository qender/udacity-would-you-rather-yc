import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { questionThunks } from '../../../redux/slices/questions';

import './new-question.css';


class NewQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
		redirectToHome: false
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	createQuestion = event => {
		event.preventDefault();
		const { optionOne, optionTwo } = this.state;
		this.props.dispatch(questionThunks.createQuestion(optionOne, optionTwo))
			.then(() => this.setState({ redirectToHome: true }));
	};

	render() {
		const { optionOne, optionTwo, redirectToHome } = this.state;

		if (redirectToHome) {
			return <Redirect to="/" />;
		}

		return (
			<section onSubmit={this.createQuestion} className="page page-content nq">
				<h2>Create New Question</h2>

				<h4>Would you rather:</h4>

				<form noValidate autoComplete="off">
					<TextField
						id="optionOne"
						label="Option One"
						value={optionOne}
						onChange={this.handleChange('optionOne')}
						margin="normal"
						fullWidth
					/>

					<TextField
						id="optionTwo"
						label="Option Two"
						value={optionTwo}
						onChange={this.handleChange('optionTwo')}
						margin="normal"
						fullWidth
					/>

					<Button
						variant="contained"
						color="primary"
						type="submit"
						className="nq__button"
					>
						Create Question
					</Button>
				</form>

			</section>
		);
	}
}

export default connect()(NewQuestion);
