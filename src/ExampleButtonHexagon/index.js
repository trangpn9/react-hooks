import React from 'react';
import './style.css';
import iconKnifeFork from './../icon-knife-fork.svg';

function ExampleButtonHexagon() {
  return (
    <button type="button" className="btnHexagon"><img src={iconKnifeFork} alt="icon" className=""/><span>Morning</span></button>
  )
}

export default ExampleButtonHexagon