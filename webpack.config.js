require('babel/register')

var React = require('react')
var getConfig = require('hjs-webpack')
var Home = require('./src/Home')

var config = getConfig({
  clearBeforeBuild: true,
  in: 'src/App.js',
  html: function (data) {
    var homeHtmlString = React.renderToString(React.createElement(Home))
    return {
      'index.html': data.defaultTemplate({ 'html': homeHtmlString })
    }
  },
  out: 'public',
  output: { hash: true }
})

module.exports = config
