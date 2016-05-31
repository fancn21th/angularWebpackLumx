var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/bootstrap/bootstrap.js']
    },
    output: {
        path: __dirname + '/src/app/',
        filename: 'app.bundle.js'
    }
};