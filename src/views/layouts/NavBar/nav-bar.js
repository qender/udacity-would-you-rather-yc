import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import UserCornerContainer from "../UserCorner/user-corner-container";
import { getTabIndex } from './helpers';

import './nav-bar.css';


const NAV_TABS = [
	{label: 'Home', to: '/'},
	{label: 'New Question', to: '/add'},
	{label: 'Leaderboard', to: '/leaderboard'}
];


class NavBar extends Component {
	state = {
		tabIndex: getTabIndex(NAV_TABS)
	};

	handleChange = (e, tabIndex) => {
		this.setState({ tabIndex });
	};

	render() {
		const { tabIndex } = this.state;

		return (
			<div>
				<AppBar position="static">
					<div className="navbar__content">
						<Tabs value={tabIndex} onChange={this.handleChange}>
							<Tab label="Home" component={Link} to="/" />
							<Tab label="New Question" component={Link} to="/add" />
							<Tab label="Leaderboard" component={Link} to="/leaderboard" />
						</Tabs>
						<UserCornerContainer />
					</div>
				</AppBar>
			</div>
		);
	}
}

export default NavBar;
