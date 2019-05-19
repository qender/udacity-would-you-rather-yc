import React, { Component } from 'react';
import Login from "./login";
import { connect } from 'react-redux';
import { authedUserThunks } from "../../../redux/slices/authedUser";


class LoginContainer extends Component {
	render() {
		return (
			<Login
				users={this.props.users}
				setAuthedUser={this.props.setAuthedUser}
			/>
		);
	}
}

const mapStateToProps = ({users}) => {
	return {
		users: Object.keys(users).map(userId => users[userId])
	}
};

const mapDispatchToProps = {
	setAuthedUser: authedUserThunks.setAuthedUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
