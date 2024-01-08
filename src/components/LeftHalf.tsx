import React, { useState, useEffect } from 'react';
import headerImage from '../Images/header2_edge_png-invert.png'
import './SplitContainer.css'

function LeftHalf() {
    return (
        <div>
            <h1>Hi there! <br/> My name is Matthew Filo </h1>
            <br />
            <img className="photo" src={headerImage} />
        </div>
    );
  }
export default LeftHalf;
