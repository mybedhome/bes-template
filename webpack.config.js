const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const devOptions = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: './public'
  }
}
const prodOptions = {
  mode: 'production',
  devtool: 'nosources-source-map',
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      minSize: 10000,
      cacheGroups: {
        vendor: {
          enforce: true,
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
module.exports = function (env, argv) {
  const isProduction = argv.mode === 'production'
  const otherOptions = isProduction ? prodOptions : devOptions
  return {
    ...otherOptions,
    entry: {
      index: './src/main.ts'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
      pathinfo: false
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'vue-loader'
        },
        {
          test: /\.(t|j)sx?$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src'),
          loader: 'babel-loader'
        },
        {
          test: /\.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'less-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5
      }),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        'process.env': JSON.stringify({
          isTest: true,
          helo: 'nihao',
          num: 10,
          arr: [111]
        })
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css'
      }),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      }),
      new ForkTsCheckerWebpackPlugin(),
      new ForkTsCheckerNotifierWebpackPlugin({
        title: 'TypeScript',
        excludeWarnings: false
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      extensions: ['.ts', '.vue', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src/')
      },
      symlinks: false
    }
  }
}
