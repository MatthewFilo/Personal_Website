
import React, { useState, useEffect } from 'react';
import SDSU_Logo from '../Images/San_Diego_State_Aztecs_logo_bw.png'
import './SplitContainer.css'

function RightHalf() {
    return (
        <div>
            <h1>I am a Software Engineer with Full-Stack and Embedded development experience</h1>
            <br />
            <h1>Education <br/> </h1>
            <img className="SDSU_Logo" src={SDSU_Logo} />
            <h2> Bachelor's of Science in Computer Science <br /> San Diego State University <br /> Class of '22 </h2>
        </div>
    );
  }

export default RightHalf;
