const webpack = require('webpack');
const path = require('path');
const banner = (({name, version, author, license}) => {
return `
/*!
 * ${name} v${version}
 * author: ${author}
 * license: ${license}
 */
`
})(require('./package.json'));


module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'jquery.accessible-name.min.js',
    library: 'jquery.accessible-name',
    libraryExport: 'jquery.accessible-name',
    libraryTarget: 'window',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
    }]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner,
      raw: true,
      entryOnly: true,
    }),
  ],
};
