const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.js'],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].css',
        })
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'postcss-loader' ]
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(otf|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                loader: 'babel-loader'
            }
        ]
    }
}
