import React from 'react'
import Radium from 'radium'

const styles = {
  alignItems: 'center',
  color: '#333',
  display: 'flex',
  height: '60px',
  justifyContent: 'center',
  textAlign: 'center',
  textDecoration: 'none',
  width: '120px'
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
