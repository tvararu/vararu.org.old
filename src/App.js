import 'whatwg-fetch'
import React from 'react'
import Home from './Home'

export default class App extends React.Component {
  static displayName = 'App'
  render () {
    return <Home />
  }
}

React.render(<App />, document.body)
