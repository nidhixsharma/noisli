import ReactSlider from 'react-slider';
import React from 'react';

const VolumeSlider = (props) =>{
return (
<div className="slidecontainer">
  <input type="range" min="0" max="10" value={props.value} className="slider" id="myRange" onChange={props.change} />
  <p>{props.value}</p>
</div>
)
}

export default VolumeSlider;
