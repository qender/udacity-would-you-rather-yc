import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCorner from "./user-corner";
import {authedUserThunks} from "../../../redux/slices/authedUser";

class UserCornerContainer extends Component {
	handleLogOut = () => {
		this.props.unsetAuthedUser();
	};

	render() {
		return (
			<UserCorner
				authedUser={this.props.authedUser}
				handleLogOut={this.handleLogOut}
			/>
		);
	}
}

const mapStateToProps = ({ users, authedUser }) => {
	return {
		authedUser: users[authedUser]
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		unsetAuthedUser: () => dispatch(authedUserThunks.unsetAuthedUser())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCornerContainer);
