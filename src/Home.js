import React from 'react'
import Radium, { Style } from 'radium'
import Link from './Link'

const homeStyles = {
  alignItems: 'center',
  background: '#ECF0F1',
  display: 'flex',
  flexFlow: 'row wrap',
  height: '100%',
  justifyContent: 'center',
  width: '100%'
}

const containerStyles = Object.assign({}, homeStyles, {
  height: '120px',
  width: '240px'
})

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
        <Link href='https://github.com/tvararu'>GitHub</Link>
        <Link href='https://vararu.org/cv'>Resumé</Link>
        <Link href='https://blog.vararu.org/'>Blog</Link>
        <Link href='mailto:theo@vararu.org'>Email</Link>
      </div>
    </div>)
  }
}
