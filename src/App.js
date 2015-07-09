const React = require('react')

class App extends React.Component {
  render() {
    return <div>Hello world!</div>
  }
}

let main = document.createElement('div')
main.id = 'main'
document.body.appendChild(main)

React.render(<App />, main)

export default App;
