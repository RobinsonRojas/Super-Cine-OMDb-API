const HtmlWebpackPlugin = require('html-webpack-plugin');

//Definiendo archivos a renderizar y administrar
const HtmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
})

//Condifuraciones del Webpack
module.exports = {
    module: 
    {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [HtmlPlugin]

};