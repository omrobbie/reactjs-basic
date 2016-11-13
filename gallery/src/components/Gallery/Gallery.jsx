import React, { Component } from 'react';
import GalleryItem from '../Gallery/GalleryItem.jsx';
import s from '../Gallery/GalleryItem.scss';

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.renderItems = this.renderItems.bind(this);
	}

	render() {
		return (
			<div className="row">
			{this.renderItems()}
			</div>
		);
	}

	renderItems() {
		return this.props.items.map(function(item) {
			return <GalleryItem key={item.id} {...item} />;
		});
	}
};

export default Gallery;