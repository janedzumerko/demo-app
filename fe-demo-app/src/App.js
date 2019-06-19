import React from 'react';
import Media from 'react-media';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';

function App() {
	return (
		<>
			<Media query="(max-width: 905px)">
				{matches =>
					matches ? (
						<>
							<h1>Login</h1>
							<p>For screens smaller then 900px</p>
						</>
					) : (
						// <Login />
						<>	
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/login" component={Login} />
							</Switch>
						</>
					)
				}
			</Media>
		</>
	);
}

export default App;
