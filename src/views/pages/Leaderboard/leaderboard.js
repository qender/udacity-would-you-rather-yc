import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';

import './leaderboard.css';


class Leaderboard extends Component {
	render() {
		const { users } = this.props;

		const sortedUsers = users.sort((a, b) => {
			return (b.questions.length + b.numAnswers) - (a.questions.length + a.numAnswers);
		});

		return (
			<section className="page page-content">
				{sortedUsers.map( (user, index) => (
					<div key={user.id} className="leader">
						<div className="leader__rank">#{index + 1}</div>
						<Avatar alt={user.name} src={user.avatarURL} classes={{root: 'leader__avatar'}} />
						<div className="leader__section_middle">
							<h3 className="leader__name">{user.name}</h3>
							<div>Questions Asked: <b>{user.questions.length}</b></div>
							<div>Questions Answered: <b>{user.numAnswers}</b></div>
						</div>
						<div className="leader__section_score">
							<div className="leader__score_header">Score</div>
							<div className="leader__score_wrapper">
								<div className="leader__score">{user.questions.length + user.numAnswers}</div>
							</div>
						</div>
					</div>
				))}

			</section>
		);
	}
}

export default Leaderboard;
