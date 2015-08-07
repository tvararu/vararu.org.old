import React from 'react'
import Radium from 'radium'
import { vr } from './utils'

const linkStyles = {
  alignItems: 'center',
  color: '#333',
  display: 'flex',
  height: vr(3),
  fontWeight: '600',
  justifyContent: 'center',
  textAlign: 'center',
  textDecoration: 'none',
  width: vr(6)
}

@Radium
export default class Link extends React.Component {
  static displayName = 'Link'
  static propTypes = {
    href: React.PropTypes.string.isRequired,
    children: React.PropTypes.any.isRequired
  }
  render () {
    const styles = Object.assign({}, linkStyles, this.props.style)
    return <a style={styles} href={this.props.href}>{ this.props.children }</a>
  }
}
