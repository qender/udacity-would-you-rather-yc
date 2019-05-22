import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Login from "./login";
import { connect } from 'react-redux';
import { authedUserThunks } from "../../../redux/slices/authedUser";


class LoginContainer extends Component {
	state = {
		from: null
	};

	setAuthedUser = (userId) => {
		return this.props.setAuthedUser(userId);
	};

	render() {
		const { from } = this.props.location.state || { from: { pathname: "/" } };

		if (this.props.authedUser) {
			return <Redirect to={from} />
		}

		return (
			<Login
				users={this.props.users}
				setAuthedUser={this.setAuthedUser}
			/>
		);
	}
}

const mapStateToProps = ({ users, authedUser }, ownProps) => {
	return {
		users: Object.keys(users).map(userId => users[userId]),
		authedUser,
		...ownProps
	}
};

const mapDispatchToProps = dispatch => {
	return {
		setAuthedUser: (userId) => dispatch(authedUserThunks.setAuthedUser(userId))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
