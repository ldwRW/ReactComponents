const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode:'production',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: '5050'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                //use: ['babel-loader?presets[]=react']
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "react"
                        ]
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin('[dist]'),
        // new HtmlWebpackPlugin({
        //     title: 'Output'
        // })
    ]
}