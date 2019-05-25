import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './home.css';


class Home extends Component {
	state = {
		selectedTab: 0
	};

	handleChange = (event, selectedTab) => {
		this.setState({ selectedTab });
	};

	render() {
		const { selectedTab } = this.state;

		return (
			<section className="page">
				<AppBar position="static">
					<Tabs
						value={selectedTab}
						onChange={this.handleChange}
						variant="fullWidth"
					>
						<Tab label="Item One" />
						<Tab label="Item Two" />
					</Tabs>
				</AppBar>

				<div className="page-content">
					{selectedTab === 0 && <div>Item One</div>}
					{selectedTab === 1 && <div>Item Two</div>}
				</div>
			</section>
		);
	}
}

export default Home;
