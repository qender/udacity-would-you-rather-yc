import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrivateRoute from "./private-route";
import { questionThunks } from "../../../redux/slices/questions";


class PrivateRouteContainer extends Component {
	componentDidMount() {
		if (this.props.authedUser) {
			this.props.dispatch(questionThunks.handleGetQuestions());
		}
	}

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
