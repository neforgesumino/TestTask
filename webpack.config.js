const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
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
            }
        ]
    }
}