var webpack = require("webpack");
const path = require('path');
module.exports = {
  context: __dirname,
  entry: './frontend/hair_bnb.jsx',
  output: {
      path: "./app/assets/javascripts",
      filename: "bundle.js"
    },
    plugins:[
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress:{
          warnings: true
        }
      })
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    },
    devtool: 'source-maps',
    resolve: {
      extensions: ["", ".js", ".jsx"]
    }
  };
