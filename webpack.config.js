const path = require('path');
const production = process.env.NODE_ENV === 'production';
const filename = production ? 'index.prod.js' : 'index.dev.js';

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@root': path.join(__dirname, 'src')
    }
  },

  // IMPORTANT: Do not bundle react and react-dom
  externals: {
    'react': 'react',
    'react-bootstrap': 'react-bootstrap',
    'react-dom': 'react-dom',
    'react-pose': 'react-pose',
    'react-router-dom': 'react-router-dom'
  }
}
