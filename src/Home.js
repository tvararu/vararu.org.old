import React from 'react'
import Radium, { Style } from 'radium'
import Link from './Link'
import { vr } from './utils'
import glassesGreyImgSrc from './img/logo-main-grey.png'
import glassesWhiteImgSrc from './img/logo-main-white.png'
import { Spring } from 'react-motion'
import _ from 'lodash'

const globalStyles = {
  '*, *:before, *:after': {
    boxSizing: 'border-box'
  },
  'html, body': {
    height: '100%',
    width: '100%'
  }
}

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
  height: vr(7 + 6 + 3 + 3),
  width: vr(12)
})

const headerStyles = {
  fontSize: '2em',
  lineHeight: '1.25em',
  fontWeight: '400',
  margin: 0,
  padding: `${vr(2)} 0 ${vr(2)} 0`
}

const glassesContainerStyles = {
  height: vr(7),
  padding: `${17}px 0 ${17}px 0`,
  position: 'relative',
  width: vr(12)
}

const glassesStyles = {
  position: 'absolute',
  width: '100%'
}

const glassesGreyStyles = Object.assign({}, glassesStyles, {
  transform: 'scale(0.99)'
})

const glassesWhiteStyles = Object.assign({}, glassesStyles, {
  transform: 'translateZ(10px)'
})

@Radium
export default class Home extends React.Component {
  static displayName = 'Home'
  getEndValue (prevValue) {
    return prevValue.map((_, i) => {
      return i === 0
        ? {val: 0}
        : {val: prevValue[i - 1].val}
    })
  }
  render () {
    return (
    <div style={homeStyles}>
      <Style rules={globalStyles} />
      <div style={containerStyles}>
        <div style={glassesContainerStyles}>
          <img style={glassesGreyStyles} src={glassesGreyImgSrc} alt='' />
          <img style={glassesWhiteStyles} src={glassesWhiteImgSrc} alt='' />
        </div>
        <h1 style={headerStyles}>Theodor Vararu</h1>
        <Spring
          defaultValue={_.range(4).map(() => ({val: 250}))}
          endValue={this.getEndValue}>
          {interpolated => {
            return (<div>
              <Link style={{transform: `translate3d(0, ${interpolated[0].val}px, 0)`}} href='https://vararu.org/cv'>Resumé</Link>
              <Link style={{transform: `translate3d(0, ${interpolated[1].val}px, 0)`}} href='https://blog.vararu.org/'>Blog</Link>
              <Link style={{transform: `translate3d(0, ${interpolated[2].val}px, 0)`}} href='https://github.com/tvararu'>GitHub</Link>
              <Link style={{transform: `translate3d(0, ${interpolated[3].val}px, 0)`}} href='mailto:theo@vararu.org'>Email</Link>
            </div>)
          }}
        </Spring>
      </div>
    </div>)
  }
}
