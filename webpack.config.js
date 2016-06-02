var webpack = require('webpack');

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
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'html'
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
    ]
};

if(process.env.npm_lifecycle_event === 'build-prod' ||
    process.env.npm_lifecycle_event === 'prod'){
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = 'source-map';
}

if(process.env.npm_lifecycle_event === 'build-prod'){
    config.output.path = __dirname + '/dist/';
}

module.exports = config;