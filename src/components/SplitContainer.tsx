// SplitContainer.tsx

import React, { useState, useEffect } from 'react';
import LeftHalf from './LeftHalf'
import RightHalf from './RightHalf';
import './SplitContainer.css'

class SplitContainer extends React.Component {
  state = {
    leftHeight: 0,
    rightHeight: 0,
    leftOpacity: 0,
    rightOpacity: 0,
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      const { leftHeight, rightHeight, leftOpacity, rightOpacity } = this.state;

      const updatedLeftHeight = Math.min(leftHeight + 1, 100);
      const updatedRightHeight = Math.min(rightHeight + 1, 100);

      const updatedLeftOpacity = Math.min(leftOpacity + 0.01, 1);
      const updatedRightOpacity = Math.min(rightOpacity + 0.01, 1);

      this.setState({
        leftHeight: updatedLeftHeight,
        rightHeight: updatedRightHeight,
        leftOpacity: updatedLeftOpacity,
        rightOpacity: updatedRightOpacity,
      });

      if (updatedLeftHeight === 100 && updatedRightHeight === 100 && updatedLeftOpacity === 1 && updatedRightOpacity === 1) {
        clearInterval(intervalId);
      }
    }, 12);
  }

  render() {
    const { leftHeight, rightHeight, leftOpacity, rightOpacity } = this.state;

    const leftStyle = {
      height: `${leftHeight}vh`,
      background: 'black',
      opacity: leftOpacity,
    };

    const rightStyle = {
      height: `${rightHeight}vh`,
      background: 'white',
      opacity: rightOpacity,
    };

    return (
      <div className="split-container" id="splitContainer">
        <div className="left-half" style={leftStyle}>
            <LeftHalf />
        </div>
        
        <div className="right-half" style={rightStyle}>
            <RightHalf />
        </div>
      </div>
    );
  }
}

export default SplitContainer;
