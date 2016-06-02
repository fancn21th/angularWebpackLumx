var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");;

var config = {
    devServer: {
        inline:true,
        port: 8889
    },
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
                loader: 'ng-annotate!babel',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css', 'less')
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test:   /\.(png|gif|jpe?g|svg)$/i,
                loader: 'url',
                query: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            ON_TEST: process.env.npm_lifecycle_event === 'test',
            ON_DEV: process.env.npm_lifecycle_event === 'dev',
            ON_PROD: process.env.npm_lifecycle_event === 'prod'
        }),
        new ExtractTextPlugin("app.bundle.css", {allChunks: true})
    ]
};

if(process.env.npm_lifecycle_event === 'dev'){
    config.devtool = 'source-map';
}

if(process.env.npm_lifecycle_event === 'build-prod' ||
    process.env.npm_lifecycle_event === 'prod'){
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = 'source-map';
}

if(process.env.npm_lifecycle_event === 'build-prod'){
    config.output.path = __dirname + '/dist/';
}

module.exports = config;