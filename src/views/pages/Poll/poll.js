import React, { Component } from 'react';
import Question from '../../components/Question/question';


class Poll extends Component {
	render() {
		const { question_id } = this.props.match.params;

		return (
			<section className="page page-content">
				<Question
					key={question_id}
					questionId={question_id}
					canAnswer={true}
				/>
			</section>
		);
	}
}

export default Poll;
