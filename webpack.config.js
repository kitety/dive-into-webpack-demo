const path = require('path')

module.exports = {
  mode: 'development',
  // 入口
  // 修改入口的对应的依赖才会热更新，而对应index.html不会触发，因为index.html脱离了js的模块存在
  entry: './main.js',
  // 出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
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
  }
}
