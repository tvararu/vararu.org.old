import React from 'react'
import Radium, { Style } from 'radium'
import Link from './Link'

const styles = {
  alignContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  height: '100%',
  justifyContent: 'center',
  width: '100%'
}

@Radium
export default class Home extends React.Component {
  static displayName = 'Home'
  render () {
    return (
    <div style={styles}>
      <Style rules={{
        'html, body': {
          height: '100%',
          width: '100%'
        }
      }} />
      <Link href='https://github.com/tvararu'>GitHub</Link>
      <Link href='https://vararu.org/cv'>Resumé</Link>
      <Link href='https://blog.vararu.org/'>Blog</Link>
      <Link href='mailto:theo@vararu.org'>Email</Link>
    </div>)
  }
}
