import React, { Component } from 'react';
import Login from "./login";
import { connect } from 'react-redux';


class LoginContainer extends Component {
	render() {
		return (
			<Login users={this.props.users} />
		);
	}
}

const mapStateToProps = ({users}) => {
	return {
		users: Object.keys(users).map(userId => users[userId])
	}
};

export default connect(mapStateToProps)(LoginContainer);
