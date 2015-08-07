import React from 'react'
import Radium from 'radium'

const styles = {
  alignItems: 'center',
  background: '#EEE',
  display: 'flex',
  height: '50px',
  justifyContent: 'center',
  textAlign: 'center',
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
