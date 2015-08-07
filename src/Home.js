import React from 'react'
import Radium, { Style } from 'radium'
import Link from './Link'
import { vr } from './utils'

const homeStyles = {
  alignItems: 'center',
  background: '#ECF0F1',
  color: '#333',
  display: 'flex',
  flexFlow: 'row wrap',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '16px',
  height: '100%',
  justifyContent: 'center',
  lineHeight: '1.25em',
  width: '100%'
}

const containerStyles = Object.assign({}, homeStyles, {
  height: vr(6),
  width: vr(12)
})

const headerStyles = {
  fontSize: '2em',
  lineHeight: '1.25em',
  fontWeight: '400',
  margin: `0 0 ${vr(2)} 0`
}

@Radium
export default class Home extends React.Component {
  static displayName = 'Home'
  render () {
    return (
    <div style={homeStyles}>
      <div style={containerStyles}>
        <Style rules={{
          'html, body': {
            height: '100%',
            width: '100%'
          }
        }} />
        <h1 style={headerStyles}>Theodor Vararu</h1>
        <Link href='https://github.com/tvararu'>GitHub</Link>
        <Link href='https://vararu.org/cv'>Resumé</Link>
        <Link href='https://blog.vararu.org/'>Blog</Link>
        <Link href='mailto:theo@vararu.org'>Email</Link>
      </div>
    </div>)
  }
}
