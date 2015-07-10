/* global fetch */
import React from 'react'
import Link from './Link'

export default class Home extends React.Component {
  static displayName = 'Home'
  constructor (props) {
    super(props)
    this.fetchData()
  }
  async fetchData () {
    const result = await fetch('https://api.github.com/repos/tvararu/cv')
    console.log(result)
  }
  render () {
    return (<div>
      <Link href='https://github.com/tvararu'>GitHub</Link>
      <Link href='https://vararu.org/cv'>Resumé</Link>
      <Link href='https://blog.vararu.org/'>Blog</Link>
      <Link href='mailto:theo@vararu.org'>Email</Link>
    </div>)
  }
}
