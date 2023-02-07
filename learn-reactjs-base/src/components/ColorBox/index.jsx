import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';
ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}
function ColorBox() {
  //const initColor = localStorage.getItem('box_color') || 'deeppink';
  //const [color, setColor] = useState(initColor);
  // chay mot lan dang callback
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    return initColor;
  });
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color', newColor);
  }
  return (
    <div className="color-box" style={{ backgroundColor: color }} onClick={handleBoxClick}>
      COLOR BOX
    </div>
  );
}

export default ColorBox;
