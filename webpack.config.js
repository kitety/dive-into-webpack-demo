const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'development',
    // 入口
    entry: './main.js',
    // 出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    // 转换.css 文件需要的loader
                    use: 'css-loader'
                })
            }
            //  之前的cssloader
            // {
            //     test: /\.css$/,
            //     // use: ['style-loader', 'css-loader']
            //     // 或者
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader'
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            // 从.js文件中提取出来的.css的文件的名称
            // css 需要另外引入
            // filename:'[name]_[hash:4].css'
            filename:'[name].css'
        })
    ]
}
