require('babel/register')

var getConfig = require('hjs-webpack')

var config = getConfig({
  clearBeforeBuild: true,
  in: 'src/App.js',
  out: 'public',
  output: { hash: true }
})

module.exports = config
