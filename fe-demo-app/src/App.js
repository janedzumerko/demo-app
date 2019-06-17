import React from 'react';
import Media from 'react-media';
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
						<Login />
					)
				}
			</Media>
		</>
	);
}

export default App;
