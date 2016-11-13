GALLERY
=======
Membuat galeri album sederhana denpan react dan bootstrap.

---

### Instalasi semua dependency dari file konfigurasi npm (package.json) :
```
$ npm install
```
atau inisialisasi file package.json yang baru dengan perintah :
```
$ npm init
```

### Instalasi webpack ke dalam devDependencies package.json :
```
$ npm i webpack -D
```

### Buat file konfigurasi webpack :
```
$ touch webpack.config.js
```

### Isi kode dibawah ke dalam webpack.config.js :
```
var path = require('path');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, './build'),
		filename: "bundle.js"
	}
};
```

### Buat file index.html di root folder :
```
$ touch index.html
```
lalu tulis kode berikut untuk mengkoneksikan dengan file output dari webpack :
```
<script src="build/bundle.js"></script>
```

### Instalasi dua komponen react ke dalam dependencies package.json dengan satu perintah :
```
$ npm i react react-dom -S
```

### Buat file index.js di folder src/app :
```
$ touch index.js
```
lalu tulis kode berikut :
```
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App/app');

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
```

### Buat file App.js di folder components/App :
```
$ touch App.js
```
lalu tulis kode berikut :
```
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return React.createElement('h1', null, 'Hello, React!');
	}
});
```

### Coba jalankan `webpack` :
```
$ ./node_modules/.bin/webpack -d
```

### Instalasi `babel` ke dalam `devDependencies` `package.json` :
```
$ npm i babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 -D
```

### Buat file konfigurasi `babel` :
```
$ touch .babelrc
```

### Isi kode dibawah ke dalam `.babelrc` :
```
{
	"presets" : ["es2015", "react", "stage-0"]
}
```

### Tambahkan kode dibawah ke dalam `webpack.config.js` :
```
### output: ....

	resolve: {
		extentions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel'
		}]
	}
```

### Ganti nama file `App.js` menjadi App.jsx :
```
$ mv App.js App.jsx
```

### Ubah isi kode `App.jsx` menjadi seperti berikut :
```
import React, {Component} from 'react';

class App extends Component {
	render() {
		return <h1>Hello, React!</h1>;
	}
}

export default App;
```

### Ubah isi kode `index.js` menjadi seperti berikut :
```
import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App.jsx';

let element = React.createElement(App, {});
render(element, document.querySelector('.container'));
```

### Instalasi `webpack-dev-server` ke dalam devDependencies package.json :
```
$ npm i webpack-dev-server -D
```

### Panggil `webpack` dengan menambahkankan kode berikut di file webpack.config.js :
```
var webpack = require('webpack');
```

### Tambahkan kode berikut ke dalam file webpack.config.js :
```
	entry: [
		"webpack-dev-server/client?http://localhots:8080",
		"./src/index.js"
	],
```
juga penting untuk menambahkan kode `publicPath: '/build/' di output.
juga tambahkan kode berikut di bawah `resolve` :
```
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
```

### Coba jalankan perintah berikut :
```
$ ./node_modules/.bin/webpack-dev-server
```
sekarang, setiap perubahan akan di tampilkan di localhots:8080 setelah menekan tombol refresh di browser.

### Buat shortcut untuk perintah `webpack-dev-server` dengan menambahkan kode berikut pada file webpack.config.js :
```
  "scripts": {
    "start": "webpack-dev-server"
  },
```

### Instalasi `react-hot-loader` ke dalam devDependencies package.json :
```
$ npm i react-hot-loader -D
```

### Tambahkan kode berikut ke dalam file webpack.config.js :
```
### entry....

		"webpack/hot/only-dev-server"
```

### Instalasi `css-loader` ke dalam devDependencies package.json :
> `style-loader` dan `css-loader` berfungsi untuk me-load file CSS ke dalam komponen react. Sedangkan `postcss-loader` berfungsi untuk memproses CSS dengan plugins.
```
$ npm i style-loader css-loader postcss-loader postcss autoprefixer precss -D
```

### Panggil `autoprefixer` dan `precss` dengan menambahkankan kode berikut di file webpack.config.js :
```
var autoprefixer = require('autoprefixer');
var precss = require('precss');
```

### Tambahkan kode berikut ke dalam file `webpack.config.js` :
```
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.scss?$/,
				exclude: /node_modules/,
				loaders: ['style-loader', 'css-loader', 'postcss-loader']
			}
		]
	},
	postcss: function() {
		return [autoprefixer, precss];
	}
```

### Buat file `variables.scss` di folder `src/components` :
```
$ touch variables.scss
```
isi file tersebut dengan kode berikut :
```
/* set colors */
$blue				: #e9f0f5;
$grey				: #ccc;
$grey-dark			: #89949b;
$grey-light			: #b8c3c8;
$red				: #ea7882;

/* set fonts */
$font-family-base	: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;

/* set layout */
$max-content-width	: 1000px;
```

### Buat file `App.scss` di folder `src/components/App` :
```
$ touch App.scss
```
isi file tersebut dengan kode berikut :
```
@import '../../../node_modules/normalize.css/normalize.css';
@import '../variables.scss';

html {
	color: #222;
	font-weight: 100;
	font-size: 1em; /* ~16px; */
	font-family: $font-family-base;
	line-height: 1.375; /* ~22px */
}

.container {
	margin: 0 auto;
	padding: 0 0 40px;
	max-width: $max-content-width;
}
```

### Instalasi `normalize.css` :
```
$ npm i normalize.css -S
```

### Tambahkan kode berikut ke dalam file `App.jsx' :
```
import s from './App.scss';
```

### Jalankan bower :
```
$ bower init
```

### Instalasi `bootstrap` melalui `bower` :
```
$ bower install bootstrap -S
```

### Koneksikan css `bootstrap` melalui `bower_components` ke dalam file `index.html` :
```
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
```

### Koneksikan js `jquery` dan `bootstrap` melalui `bower_components` ke dalam file `index.html` :
```
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
```

### Buat file `GalleryItem.jsx` di folder `src/components/Gallery` :
```
$ touch GalleryItem.jsx
```

### Isi kode berikut ke dalam file `GalleryItem.jsx` :
```
import React, {Component} from 'react';
import s from './GalleryItem.scss';

class GalleryItem extends Component {
	constructor(props) {
		super(props);
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	static defaultProps = {
		title: "Default Title",
		subtitle: "Lorem ipsum",
		image: "../../img/success.jpg"
	}

	state = {
		hovering: false,
		liked: this.props.liked || false,
		counts: (Math.round(Math.random() * 20) + 4)
	}

	handleIncrement() {
		if(this.state.liked) return;
		this.setState({
			liked: true,
			counts: this.state.counts+1
		});
	}

	render() {
		return(
			<div className="col-xs-6 col-sm-4">
				<div className="thumbnail">
					<div className="image-preview" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
						<a className="gallery" href={this.props.image} title={this.props.title}>
							{this.state.hovering ? this.icons() : null}
							<img src={this.props.image} alt="{this.props.title}" />
						</a>
					</div>
					<div className="caption text-center">
						<h4>{this.props.title}</h4>
						<h5>{this.props.subtitle}</h5>
						<a className={"btn btn-primary" + (this.state.liked ? " liked" : "")} onClick={this.handleIncrement}>
							<span className="glyphicon glyphicon-heart"></span> {this.state.counts}
						</a>
					</div>
				</div>
			</div>
		);
	}

	icons() {
		return <div className="overlay"><span className="glyphicon glyphicon-zoom-in"></span></div>
	}

	handleMouseEnter() {
		this.setState({hovering: true});
	}

	handleMouseLeave() {
		this.setState({hovering: false});
	}
};

export default GalleryItem;
```

### Buat file `GalleryItem.scss` di folder `src/components/Gallery` :
```
$ touch GalleryItem.scss
```

### Isi kode berikut ke dalam file `GalleryItem.scss` :
```
@import '../variables.scss';

.btn {
	border: 2px solid $grey;
	border-radius: 20px;
	padding: 3px 20px;
}

.btn-primary {
	background-color: white;
	color: $grey-dark;
	&:hover, &:focus, &:active, &.liked {
		background-color: $red;
		border-color: $red;
		color: white;
	}
}

.thumbnail {
	border-radius: 8px;
	padding: 12.5px;
	.image-preview {
		display: inline-block;
		position: relative;
		margin: 0 auto;
		img {
			width: 100%;
			height: 100%;
			display: inline-block;
		}
		.overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: black;
			opacity: 0.7;
			cursor: pointer;
		}
		.glyphicon-zoom-in {
			font-size: 40px;
			color: white;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}
	.caption {
		padding: 0;
		text-transform: uppercase;
		h5 {
			color: $grey-light;
		}
	}
}
```

### Buat file `Gallery.jsx` di folder `src/components/Gallery` :
```
$ touch Gallery.jsx
```

### Isi kode berikut ke dalam file `Gallery.jsx` :
```
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
```

### Buat fake data di `index.js` :
```
let options = {
	galleryItems: [
		{ id: 1, title: "Camera", subtitle: "5th Jan - 12th Jan", image: "https://cloud.githubusercontent.com/assets/4352286/11920432/f0aaff34-a76f-11e5-8456-a5d78b089233.jpg", liked: true },
		{ id: 2, title: "Notebook", subtitle: "13th Feb - 5th Aug", image: "https://cloud.githubusercontent.com/assets/4352286/11920434/f0ac4d44-a76f-11e5-9190-b93bc72688ed.jpg" },
		{ id: 3, title: "Thinking", subtitle: "13th Dec - 14th Dec", image: "https://cloud.githubusercontent.com/assets/4352286/11920433/f0ab6a28-a76f-11e5-8ee9-525dc22ca8a8.jpg" }
	]
};
```

### Ubah baris berikut
```
let element = React.createElement(App, {});
```
menjadi
```
let element = React.createElement(App, options);
```

### Tampilkan data tersebut melalui `App.jsx` :
```
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
```

### Untuk menjalankan aplikasi, ketikkan :
```
$ npm start
```

lalu masuk ke [link ini](http://localhost:8080/ "localhots:8080") ke browser

# Done!