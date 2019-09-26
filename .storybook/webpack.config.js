const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../'),             // `/``
      path.resolve(__dirname, '../node_modules'), // `/node_modules`
      path.resolve(__dirname, '../app'),          // `/app`
      path.resolve(__dirname)                     // `/.storybook`
    ]
  }
}
