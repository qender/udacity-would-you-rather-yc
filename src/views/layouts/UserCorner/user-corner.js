import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
		this.handleClose();
	};

	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		const menuOrigin = {
			vertical: 'top',
			horizontal: 'right',
		};

		return (
			<div>
				<span className="user-corner_greeting">Hey Sarah Edo!</span>
				<IconButton
					aria-owns={open ? 'user-corner_menu' : undefined}
					aria-haspopup="true"
					onClick={this.handleMenu}
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<Menu
					id="user-corner_menu"
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
