import React from 'react'
import './css/Slider.css'

const Slider = ({btnDisabled,speed,handleSlideChange}) => {
  return (
    <input disabled={btnDisabled} type="range" min="0" max="7" step="1" value={7-Math.round(Math.log2(speed))} onChange={handleSlideChange} className="slider" id="myRange"></input>
  )
}

export default Slider