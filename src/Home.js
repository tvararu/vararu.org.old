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

const animationStyles = (tweeningCollection) => {
  return {
    opacity: `${tweeningCollection.opacity.val}`,
    transform: `translate3d(0, ${tweeningCollection.y.val}px, 0)`
  }
}

@Radium
export default class Home extends React.Component {
  static displayName = 'Home'
  getEndValue (prevValue) {
    return {
      words: prevValue.words.map((_, i) => {
        return i === 0
          ? {y: {val: 0}, opacity: {val: 1}}
          : {y: {val: prevValue.words[i - 1].y.val}, opacity: {val: prevValue.words[i - 1].opacity.val}}
      }),
      glasses: prevValue.glasses.map((_, i) => {
        return i === 0
          ? {
            y: {val: 0},
            opacity: {val: 1}
          }
          : {
            y: {val: prevValue.glasses[i - 1].y.val, config: [500, 20]},
            opacity: {val: prevValue.glasses[i - 1].opacity.val, config: [500, 20]}
          }
      })
    }
  }
  render () {
    return (
    <div style={homeStyles}>
      <Style rules={globalStyles} />
      <Spring
        defaultValue={{
          words: _.range(5).map(() => ({y: {val: 150}, opacity: {val: 0}})),
          glasses: _.range(2).map(() => ({y: {val: -150}, opacity: {val: 0}}))
        }}
        endValue={this.getEndValue}>
        {interpolated =>
          <div style={containerStyles}>
            <div style={glassesContainerStyles}>
              <img style={
                Object.assign({}, glassesStyles, {
                  opacity: `${interpolated.glasses[1].opacity.val}`,
                  transform: `scale(0.99) translate3d(0, ${interpolated.glasses[1].y.val}px, 0)`
                })
              } src={glassesGreyImgSrc} alt='' />
              <img style={
                Object.assign({}, glassesStyles, {
                  opacity: `${interpolated.glasses[0].opacity.val}`,
                  transform: `translate3d(0, ${interpolated.glasses[0].y.val}px, 10px)`
                })
              } src={glassesWhiteImgSrc} alt='' />
            </div>
            <h1 style={Object.assign({}, headerStyles, animationStyles(interpolated.words[0]))}>Theodor Vararu</h1>
            <Link style={animationStyles(interpolated.words[1])} href='https://vararu.org/cv'>Resumé</Link>
            <Link style={animationStyles(interpolated.words[2])} href='https://blog.vararu.org/'>Blog</Link>
            <Link style={animationStyles(interpolated.words[3])} href='https://github.com/tvararu'>GitHub</Link>
            <Link style={animationStyles(interpolated.words[4])} href='mailto:theo@vararu.org'>Email</Link>
          </div>
        }
      </Spring>
    </div>)
  }
}
