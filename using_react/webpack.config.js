const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  name: 'component-setting',
	mode: 'development',
	devtool: 'eval',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	entry: {
		app: [
			'./client',
		],
	},
	module: {
		rules: [{
			test: /\.jsx?$/i,
			loader: 'babel-loader',
			options: {
				presets: [
					['@babel/preset-env', {
						targets: {
							browsers: [
								'> 5% in KR',
								'last 2 chrome versions',
							],
						},
						debug: true,
					}],
					'@babel/preset-react',
				],
				plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-hot-loader/babel',
				],
			},
		}, {
			test: /\.css|scss$/i,
			use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
		}],
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			debug: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
	],
	output: {
		path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
	},
}