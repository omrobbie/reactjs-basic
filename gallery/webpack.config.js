var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhots:8080",
		"webpack/hot/only-dev-server",
		"./src/index.js"
	],
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '/build/',
		filename: "bundle.js"
	},
	resolve: {
		extentions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel']
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
};