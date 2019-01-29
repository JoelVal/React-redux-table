const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const babelPlugins = ['@babel/plugin-transform-runtime']

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'javascripts/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  /*module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }*/
  module : {
    rules : [
        {
            test : /\.(js|jsx)$/,
            use : {
                loader : 'eslint-loader',
                options : {
                    plugins: [
                        "react"
                      ]
                }
            },
            exclude : /node_modules/
        },
        {
            test: /\.sass$/,
            use: [
              {
                loader: "style-loader" // creates style nodes from JS strings
              },
              {
                loader: "css-loader" // translates CSS into CommonJS
              },
              {
                loader: "sass-loader" // compiles Sass to CSS
              }
            ]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.svg$/,
            loader: 'file-loader'
        },
        {
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            exclude: /node_modules/,

            use: {
                loader: 'babel-loader',
                
                options: {
                    compact: false,
                    presets: [
                        
                        '@babel/react'
                    ],
                    plugins: babelPlugins
                }
            }
        },
        

    ]
  },
  plugins: [
    new UglifyJsPlugin({
        sourceMap: false,
        uglifyOptions: {
            parallel: true,
            compress: false,
            warnings: false,
            comparisons: false,
            output: {
                comments: false,
                beautify: false
           },
           
       }
    }),
    new webpack.ProvidePlugin({
        "React": "react"
    })
  ]
};

module.exports = config;