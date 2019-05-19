import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import ReactDOM from 'react-dom';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


import './login.css';


class Login extends Component {
	state = {
		user: '',
		labelWidth: 0
	};

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
		});
	}

	handleSelectUser = e => {
		console.log('e.target', e.target);
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { users } = this.props;

		return (
			<main className="login">
				<Paper className="login__content">
					<h3>Welcome to the Would You Rather game</h3>
					<p className="login__message gray-text">Please sign in to continue</p>

					<FormControl variant="outlined" className="login__form-control">
						<InputLabel
							ref={ref => {
								this.InputLabelRef = ref;
							}}
							htmlFor="select-user"
						>
							User
						</InputLabel>
						<Select
							value={this.state.user}
							onChange={this.handleSelectUser}
							className="login__select"
							input={
								<OutlinedInput
									labelWidth={this.state.labelWidth}
									name="user"
									id="select-user"
								/>
							}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							{users && users.map(user => (
								<MenuItem key={user.id} value={user.id} className="login__menu-item">
									<ListItemAvatar>
										<Avatar alt={user.name} src={user.avatarURL} />
									</ListItemAvatar>
									<ListItemText inset primary={user.id} />
								</MenuItem>
							))}
						</Select>
					</FormControl>

					<div className="login__button">
						<Button variant="contained" color="primary">
							Log In
						</Button>
					</div>
				</Paper>
			</main>
		);
	}
}

export default Login;
