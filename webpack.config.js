var path = require ('path');

module.exports = {
	entry: './script.jsx',
	output: {
		path : path.resolve(__dirname,''),
		filename: 'transpiled.js'
	},
	module: {
		rules: [
			{
				test: /\.(pdf|jpg|png|gif|svg|ico)$/,
				use: [
				{
					loader: 'url-loader'
				},
				]
			},
			{
				test:/\.jsx?$/,
				loaders:'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015','react']
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		
		extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: [
          'node_modules'
        ]        
    }
}