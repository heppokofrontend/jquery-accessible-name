// Generated using webpack-cli https://github.com/webpack/webpack-cli

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
const isProduction = process.env.NODE_ENV == 'production';


const config = {
  entry: './src/index.ts',
  plugins: [
    new webpack.BannerPlugin({
      banner,
      raw: true,
      entryOnly: true,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';


  } else {
    config.mode = 'development';
  }
  return [
    {
      ...config,
      output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'jquery.accessible-name.min.js',
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
              loader: 'ts-loader',
            },
          },
        ],
      },
    },
    {
      ...config,
      output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'jquery.accessible-name.corejs.min.js',
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      corejs: 3,
                      useBuiltIns: "usage",
                    },
                  ],
                  '@babel/preset-typescript',
                ],
              },
            },
          },
        ],
      },
    },
  ];
};
