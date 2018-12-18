const path = require('path')
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
                // use: ['style-loader', 'css-loader']
                // 或者
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
}
