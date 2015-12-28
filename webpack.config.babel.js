import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

var WebpackConfig = {
    entry: [
        'babel-polyfill',
        __dirname + '/web/main.js'
    ],
    output: {
        filename: 'bundle[hash].js',
        path: 'dist'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, "web"),
            ],
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'stage-0', 'react'],
            }
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {
            test: /\.png$/,
            loader: "url-loader?limit=100000"
        },
        {
            test: /\.jpg$/,
            loader: "file-loader"
        },
        {
            test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader : 'file-loader'
        },
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/web/index.html',
            inject: 'body'
        })
    ]
}

module.exports = WebpackConfig
