
import React, { useState, useEffect } from 'react';
import SDSU_Logo from '../Images/San_Diego_State_Aztecs_logo_bw.png'
import headerImage from '../Images/header2_edge_png.png'
import SocialMedia from './SocialMedia';
import { SocialIcon } from 'react-social-icons';
import './SplitContainer.css'

function RightHalf() {
    return (
        <div>
            <img className="photo" src={headerImage} />
            <hr />
            <img className="SDSU_Logo" src={SDSU_Logo} />
            <h2> Bachelor's of Science in Computer Science <br /> San Diego State University <br /> Class of '22 </h2>
            <hr />
            <SocialMedia />
        </div>
    );
  }

export default RightHalf;
