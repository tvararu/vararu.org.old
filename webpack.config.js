var getConfig = require('hjs-webpack')

var config = getConfig({
  in: 'src/App.js',
  out: 'public',
  clearBeforeBuild: true
})

module.exports = config
