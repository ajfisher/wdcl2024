const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: '../src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Use sass-loader instead of node-sass
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './slides.md', to: './' },
        // Add other static assets here if needed
      ],
    }),
  ],
    resolve: {
      alias: {
        'reveal.js': path.resolve(__dirname, 'node_modules/reveal.js'),
        'reveal.js/plugin/markdown/markdown.esm.js': path.resolve(__dirname,
          'node_modules/reveal.js/plugin/markdown/markdown.esm.js'),
        'reveal.js/plugin/notes/notes.esm.js': path.resolve(__dirname,
          'node_modules/reveal.js/plugin/notes/notes.esm.js'),
      },
    },
};

