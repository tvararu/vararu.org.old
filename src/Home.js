import React from 'react'
import Link from './Link'

export default class Home extends React.Component {
  static displayName = 'Home'
  render () {
    return (<div>
      <Link href='https://github.com/tvararu'>GitHub</Link>
      <Link href='https://vararu.org/cv'>Resumé</Link>
      <Link href='https://blog.vararu.org/'>Blog</Link>
      <Link href='mailto:theo@vararu.org'>Email</Link>
    </div>)
  }
}
