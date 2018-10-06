var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3600,
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/app.js',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                resolve: {
                    extensions: ['.js', '.jsx']
                },
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: ['style-loader','css-loader','sass-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                loader: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.png/,
                loader: ['file-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ]
};
