import React from 'react';
import './ciga.css';

const defaultImg = require('../../../img/smoking.png');

const SmokCiga = ({img}) => <div>
    <div className="ciga">
        <img src={img} />
     
        <div className="dot_ben"></div>
        <div className="dot_but"></div>
        <div className="dot_tar"></div>
        <div className="dot_ammo"></div>
        <div className="dot_nic"></div>
        </div>
  
</div>;

SmokCiga.defaultProps = {
    img:defaultImg
}

export default SmokCiga;