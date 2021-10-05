import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';

export const DEBUG = process.env.NODE_ENV !== 'production';

export const NODE_ENV = DEBUG ? 'development' : 'production';

export const plugins: webpack.Configuration['plugins'] = [
  new HtmlWebpackPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  }),
];

if (DEBUG) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

export const config = (rootDir: string = __dirname): webpack.Configuration => ({
  mode: NODE_ENV,
  target: 'web',
  entry: {
    main: path.resolve(rootDir, './src/index.tsx'),
  },
  output: {
    path: path.resolve(rootDir, './build'),
    filename: DEBUG ? '[name].js?[fullhash]' : '[name].[fullhash].js',
    chunkFilename: DEBUG ? '[name].js?[chunkhash]' : '[name].[chunkhash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
        exclude: /node_modules/,
        include: path.resolve(rootDir, './src'),
        use: require.resolve('babel-loader'),
      },
    ],
  },
  devtool: DEBUG ? 'inline-source-map' : 'source-map',
  plugins,
});

export default config();
