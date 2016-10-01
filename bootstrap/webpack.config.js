var webpack = require('webpack');
var path = require('path');

var BUILT_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILT_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?/,
			include: APP_DIR,
			loader: 'babel'
		}]
	}
};

module.exports = config;