const React = require('react')

class Link extends React.Component {
  render () {
    return <a href={ this.props.href }>{ this.props.children }</a>
  }
}

Link.propTypes = {
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired
}

export default Link
