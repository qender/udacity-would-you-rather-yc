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
		selectedUser: '',
		labelWidth: 0,
		error: null
	};

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
		});
	}

	handleSelectUser = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleLogIn = e => {
		e.preventDefault();
		if (this.state.selectedUser) {
			this.props.setAuthedUser(this.state.selectedUser);
			this.setState({
				error: null
			});
		} else {
			this.setState({error: 'Please select a user'});
		}
	};

	render() {
		const { users } = this.props;
		const { selectedUser, labelWidth, error } = this.state;

		return (
			<main className="login">
				<Paper className="login__content">
					<h3>Welcome to the Would You Rather game</h3>
					<p className="login__message gray-text">Please sign in to continue</p>

					<form onSubmit={e => this.handleLogIn(e)}>
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
								value={selectedUser}
								onChange={this.handleSelectUser}
								className="login__select"
								input={
									<OutlinedInput
										labelWidth={labelWidth}
										name="selectedUser"
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

						{error &&
							<div className="login__error red-text">{error}</div>
						}

						<div className="login__button">
							<Button variant="contained" color="primary" type="submit">
								Log In
							</Button>
						</div>
					</form>
				</Paper>
			</main>
		);
	}
}

export default Login;
