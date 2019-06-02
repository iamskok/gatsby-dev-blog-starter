import React, { Component } from 'react'
import Particles from 'react-particles-js'
import '../styles/particles.scss'
import particlesConfig from '../json/particlesConfig.json'

const particleStyles = {
  base: {
    position: 'fixed',
    backgroundIimage: 'url("")',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    marginTop: 65,
  },
}

export default class extends Component {
  render() {
    return (
      <div className="particles">
        <Particles
          params={particlesConfig}
          style={particleStyles.base}
          width={'100%'}
          height={'calc(100vh - 130px)'}
        />
      </div>
    )
  }
}
