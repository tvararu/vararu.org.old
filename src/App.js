const React = require('react')
const Home = require('./Home')

class App extends React.Component {
  static displayName = 'App'
  render () {
    return <Home />
  }
}

React.render(<App />, document.body)

export default App
