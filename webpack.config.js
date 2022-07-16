const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'src/images/[name].[ext]'
  },
  module: {
    rules: [
        {
        test: /\.css$/,
        use: [
            "style-loader",
            "css-loader",
        ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          type: 'asset/resource'
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
    ]
  }  
  };