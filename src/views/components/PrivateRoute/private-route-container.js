import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrivateRoute from "./private-route";


class PrivateRouteContainer extends Component {
	render() {
		const { authedUser, ...ownProps } = this.props;

		return (
			<PrivateRoute authedUser={authedUser} {...ownProps} />
		);
	}
}


const mapStateToProps = ({ authedUser }, ownProps) => {
	return {
		authedUser,
		...ownProps
	}
};

export default connect(mapStateToProps)(PrivateRouteContainer);
