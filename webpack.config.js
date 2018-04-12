
var config = {
    entry: './main.js', // entry point
    output: {
        filename: 'index.js', // place where bundled app will be served
    },
    devServer: {
        inline: true, // autorefresh
        port: 3000 // development port server
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // search for js files
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'] // use es2015 and react
                }
            }
        ]
    },
    mode: 'none'
}

module.exports = config;