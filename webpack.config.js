var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
    disable: process.env.NODE_ENV === "development"
});

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {      
        loaders: [
          {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader?-minimize"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
          }
        ],
    },
    plugins: [
        extractSass
    ]
}