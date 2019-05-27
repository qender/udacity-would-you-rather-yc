import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './loader.css';

const loader = props => {
	return (
		<div className="loader">
			<CircularProgress />
		</div>
	);
};

export default loader;
