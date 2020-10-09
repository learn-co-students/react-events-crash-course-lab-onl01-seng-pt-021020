import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  toggle = () => {
    toggleCycling()
  }

  manualResize = (event) => {
    const k = event.key

    if (k === 'a') {
      resize('+')
    } else if (k === 's') {
      resize('-')
    }
  }
  
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.toggle}
        onKeyPress={this.manualResize}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
