const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPluguin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    new CopyWebpackPluguin({
        patterns: [{ from: './src/styles/styles.css',
        to: '' }],
      })
  ]
}

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPluguin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',
  //coloca la conversion de un archivo en una carpeta 
  output: {
    //el path proporciona utilidades para trabajar con rutas y directorios
    path: path.resolve(__dirname, 'dist'), 
    filename: 'main.js' //nombre del archivo de salida
  },
  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [  //la propiedad rules es un arreglo de js
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', //webpack puede entender codigo de js
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html', //le estamos diciendo que se base en una plantilla que esta dentro de puclic/index.html
        filename: './index.html',
      }
    ),
    new CopyWebpackPluguin({
        patterns: [{ from: './src/styles/styles.css',
        to: '' }],
      })
  ]
}

