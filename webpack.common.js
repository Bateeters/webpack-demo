const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry:{
        app: './src/index.js',
    },
    plugins: [
        newHtmlWebpackPlugin({
            title: 'Production',
        }),
    ],
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};