import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './not-found.css';
import Button from '@material-ui/core/Button';


class NotFound extends Component {
	render() {
		return (
			<section className="nf">
				<div className="nf__text">404 - Not Found :(</div>

				<Link to='/'>
					<Button color="primary" variant="contained">
						Go Home
					</Button>
				</Link>
			</section>
		);
	}
}

export default NotFound;
