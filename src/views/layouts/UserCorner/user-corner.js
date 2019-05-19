import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';

import './user-corner.css';


class UserCorner extends Component {
	state = {
		anchorEl: null
	};

	handleMenu = e => {
		this.setState({ anchorEl: e.currentTarget });
	};

	handleClose = () => {
    	this.setState({ anchorEl: null });
  	};

	handleLogOut = () => {
		this.props.handleLogOut()
	};

	render() {
		const { authedUser } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		const menuOrigin = {
			vertical: 'top',
			horizontal: 'right',
		};

		return (
			<div className="user-corner">
				<span className="user-corner__greeting">Hey {authedUser.name}!</span>
				<div className="user-corner__avatar-container">
					<Avatar alt={authedUser.name}
							src={authedUser.avatarURL}
							aria-owns={open ? 'user-corner__menu' : undefined}
							aria-haspopup="true"
							onClick={this.handleMenu} />
				</div>

				<Menu
					id="user-corner__menu"
					anchorEl={anchorEl}
					anchorOrigin={menuOrigin}
					transformOrigin={menuOrigin}
					open={open}
					onClose={this.handleClose}
				>
					<MenuItem onClick={this.handleLogOut}>Log Out</MenuItem>
				</Menu>
			</div>
		);
	}
}

export default UserCorner;
