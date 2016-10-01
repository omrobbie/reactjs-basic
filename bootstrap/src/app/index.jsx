import React from 'react';
import {render} from 'react-dom';
import LikeComponent from './LikeComponent.jsx';

class App extends React.Component {
	render() {
		return <div>
			<h1>Hello Reacts!</h1>
			<p>This is my first app in react</p>
			<LikeComponent />
		</div>;
	}
}

render(<App />, document.getElementById('app'));