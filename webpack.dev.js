const common = require('./webpack.common')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
//const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin('[dist]'),
        // new HtmlWebpackPlugin({
        //     title: 'Output'
        // })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: '5050',
        historyApiFallback: true
    }
})