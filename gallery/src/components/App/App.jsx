import React, {Component} from 'react';
import Gallery from '../Gallery/Gallery.jsx';
import s from './App.scss';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, React!</h1>
				<Gallery items={this.props.galleryItems} />
			</div>
		);
	}
}

export default App;