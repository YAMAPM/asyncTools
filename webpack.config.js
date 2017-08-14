const path = require("path");
module.exports = {

    entry: {
        app: './app/index.js'
    },
    output: {
        path: path.resolve(__dirname, "public"),
        // publicPath: "/assets/",
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    module: {
    	loaders: [
            {
                test: /\.js|jsx$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','stage-2']
                }
            }
        ]
   },
   devServer: {
   		contentBase: path.join(__dirname, "public"),
        port: 8090,
	    inline: true//实时刷新
	},
   
};