const PATH = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack')

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'main.js',
        path : PATH.resolve(__dirname, 'dist')
    },
    module : {
        rules : [
            {
                test : /\.css$/i,
                use : [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test : /\.scss$/i,
                use : [
                'style-loader',
                'css-loader',
                'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test : /\.mp4$/i,
                use : [
                    "file-loader",
                ]
            }
        ]
    },
    plugins : [
        new dotenv(),
    ]
}
