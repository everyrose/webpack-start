const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js', // [name] - entry name
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase:
            './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), // to clean dist every time
        new HtmlWebpackPlugin({ // creates index.html and add all bundles
            title: 'Output management'
        })
    ],
    module:
        {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        }
}
;