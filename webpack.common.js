const path = require('path')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                //use: ['babel-loader?presets[]=react']
                use: [
                    { loader: "babel-loader" }
                ]
            },
            {
                test: /\.(css|scss)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.scss$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    { loader: "sass-loader"}
                ]
            }
        ]
    }
}