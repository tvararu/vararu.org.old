const React = require('react')
const Radium = require('radium')

const styles = {
  color: 'red',
  transition: 'color 0.3s ease',
  ':hover': {
    color: 'blue'
  }
}

@Radium
class Link extends React.Component {
  static displayName = 'Link'
  static propTypes = {
    href: React.PropTypes.string.isRequired,
    children: React.PropTypes.any.isRequired
  }
  render () {
    return <a style={styles} href={this.props.href}>{ this.props.children }</a>
  }
}

export default Link
