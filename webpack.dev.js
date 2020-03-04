import fs from 'fs';
import webpack from 'webpack';
import merge from 'webpack-merge';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import config, { BUILD_FOLDER } from './webpack.config.js';

const https =
  process.env.DEV_SERVER_HTTPS_KEY && process.env.DEV_SERVER_HTTPS_CERT
    ? {
        key: fs.readFileSync(process.env.DEV_SERVER_HTTPS_KEY),
        cert: fs.readFileSync(process.env.DEV_SERVER_HTTPS_CERT),
        ca: process.env.DEV_SERVER_HTTPS_CA
          ? fs.readFileSync(process.env.DEV_SERVER_HTTPS_CA)
          : undefined
      }
    : false;

export default merge(config, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: BUILD_FOLDER,
    historyApiFallback: true,
    hot: true,
    host: process.env.DEV_SERVER_HOST || 'localhost',
    https,
    port: process.env.DEV_SERVER_PORT || 3000,
    publicPath: '/',
    watchOptions: {
      ignored: /node_modules/
    }
  },
  output: {
    chunkFilename: '[name].chunk.js',
    crossOriginLoading: 'anonymous',
    filename: '[name].js',
    path: BUILD_FOLDER,
    publicPath: '/'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
    // new BundleAnalyzerPlugin({
    //   analyzerPort: 8888
    // })
  ],
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
    hints: 'warning'
  }
});
