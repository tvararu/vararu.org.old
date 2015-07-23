import React from 'react'
import Radium from 'radium'

const styles = {
  alignContent: 'center',
  background: '#EEE',
  height: '50px',
  justifyContent: 'center',
  width: '300px'
}

@Radium
export default class Link extends React.Component {
  static displayName = 'Link'
  static propTypes = {
    href: React.PropTypes.string.isRequired,
    children: React.PropTypes.any.isRequired
  }
  render () {
    return <a style={styles} href={this.props.href}>{ this.props.children }</a>
  }
}
