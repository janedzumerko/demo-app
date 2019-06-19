import axios from 'axios';
import React, { Component } from 'react';
import { Button, Header } from '../../components';
import Label from '../../components/Label/Label';
import './Login.css';

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

class Login extends Component {
	constructor() {
		super();

		this.state = {
			signup: false,
			register: {
				name: '',
				email: '',
				password: '',
				password_confirm: '',
				errors: {},
			},
			login: {
				email: '',
				password: '',
				errors: {},
			},
		};
	}

	handleToggle = () => {
		this.setState(prevState => {
			return {
				signup: !prevState.signup,
			};
		});
	};

	handleSignUp = e => {
		console.log('sign up');
		e.preventDefault();
		const user = {
			name: this.state.register.name,
			email: this.state.register.email,
			password: this.state.register.password,
			password_confirm: this.state.register.password_confirm,
		};
		axios
			.post('http://localhost:8080/api/users/register', user)
			.then(res => console.log(res))
			.catch(err => console.log(err.response.data));
		console.log(user);
	};

	handleSignIn = e => {
		console.log('sign in');
		e.preventDefault();
		const user = {
			email: this.state.login.email,
			password: this.state.login.password,
		};
		axios
			.post('http://localhost:8080/api/users/login', user)
			.then(res => console.log(res.data))
			.catch(err => console.log(err.response.data));
		console.log(user);
	};

	handleInputChange = e => {
		let isEmailValid, mailMsg;
		if (e.target.name === 'email') {
			isEmailValid = validateEmail(e.target.value);
			mailMsg = isEmailValid ? '' : 'Please enter valid email';
		}

		if (this.state.signup) {
			console.log('changing input in sign up');
			const err = { ...this.state.register.errors };
			if (mailMsg !== '') {
				err.email = mailMsg;
			}
			const register = {
				...this.state.register,
				[e.target.name]: e.target.value,
				errors: err,
			};
			this.setState({ register });
		} else {
			const err = { ...this.state.register.errors };
			if (mailMsg !== '') {
				err.email = mailMsg;
			}
			console.log('changing input in sign in');
			const login = {
				...this.state.login,
				[e.target.name]: e.target.value,
				errors: err,
			};
			this.setState({ login });
		}
	};

	render() {
		return (
			<>
				<div id="login">
					<div className="myyheader">
						<Header />
					</div>

					<div className={`cont ${this.state.signup ? 's--signup' : ''} `}>
						<div className="form sign-in">
							<h2>Welcome back,</h2>
							<Label
								change={this.handleInputChange}
								title="Email"
								type="email"
								name="email"
							/>
							<div>
								{this.state.login.errors.email === ''
									? null
									: this.state.login.errors.email}
							</div>
							<Label
								change={this.handleInputChange}
								title="Password"
								type="password"
								name="password"
							/>

							<Button btnStyle="forgot">Forgot password?</Button>
							<Button click={this.handleSignIn} btnStyle="standard">
								Sign In
							</Button>
							<Button btnStyle="fb">
								Connect with <span className="fbSpan">facebook</span>
							</Button>
						</div>
						<div className="sub-cont">
							<div className="img">
								<div className="img__text m--up">
									<h2>New here?</h2>
									<p>
										Sign up and discover great amount of new
										opportunities!
									</p>
								</div>
								<div className="img__text m--in">
									<h2>One of us?</h2>
									<p>
										If you already has an account, just sign in. We've
										missed you!
									</p>
								</div>
								<div onClick={this.handleToggle} className="img__btn">
									<span className="m--up">Sign Up</span>
									<span className="m--in">Sign In</span>
								</div>
							</div>
							<div className="form sign-up">
								<h2>
									It is time to <br /> feel like home,
								</h2>
								<Label
									change={this.handleInputChange}
									title="Name"
									type="text"
									name="name"
								/>
								<Label
									change={this.handleInputChange}
									title="Email"
									type="email"
									name="email"
								/>
								<Label
									change={this.handleInputChange}
									title="Password"
									type="password"
									name="password"
								/>
								<Label
									change={this.handleInputChange}
									title="Confirm Password"
									type="password"
									name="password_confirm"
								/>

								<Button click={this.handleSignUp} btnStyle="standard">
									Sign Up
								</Button>
								<Button btnStyle="fb">
									Join with <span className="fbSpan">facebook</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Login;
