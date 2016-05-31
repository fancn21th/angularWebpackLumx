var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/core/bootstrap.js']
    },
    output: {
        path: __dirname + '/src/app/',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    }
};