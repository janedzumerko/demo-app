import React, { Component } from 'react';
import { Button } from '../../components';
import Label from '../../components/Label/Label';
import './Login.css';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			signup: false,
		};
	}

	handleToggle = () => {
		this.setState(prevState => {
			return {
				signup: !prevState.signup,
			};
		});
	};

	render() {
		return (
			<>
				<div className={`cont ${this.state.signup ? 's--signup' : ''} `}>
					<div className="form sign-in">
						<h2>Welcome back,</h2>
						<Label title="Email" type="email" />
						<Label title="Password" type="password" />

						<Button btnStyle="forgot">Forgot password?</Button>
						<Button btnStyle="standard">Sign In</Button>
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
							<h2>Time to feel like home,</h2>
							<Label title="Name" type="text" />
							<Label title="Email" type="email" />
							<Label title="Password" type="password" />

							<Button btnStyle="standard">Sign Up</Button>
							<Button btnStyle="fb">
								Join with <span className="fbSpan">facebook</span>
							</Button>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Login;
