var getConfig = require('hjs-webpack')

var config = getConfig({
  in: 'src/App.js',
  out: 'public',
  clearBeforeBuild: true
})

// #YOLO.
config.module.loaders[0].loaders[1] = 'babel-loader?stage=0'

module.exports = config
