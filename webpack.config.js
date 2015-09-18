module.exports = {
	entry: "./src/main.js",
	output: {
		filename: "bundle.js"
	},
  devtool: "eval",
	module: {
    loaders: [
      {
        test: /\.css$/, loader: "style!css",
        exclude: /node_modules/,
      },
      { 
        test   : /.js$/,
        loader : 'babel-loader' ,
        exclude: /node_modules/
      }
    ]
  }
};
