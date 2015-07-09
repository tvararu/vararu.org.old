const React = require('react')
const Home = require('./Home')

class App extends React.Component {
  render () {
    return <Home />
  }
}

const main = document.createElement('div')
main.id = 'main'
document.body.appendChild(main)

React.render(<App />, main)

export default App
