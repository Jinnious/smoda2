import React from 'react';
import './info.css';
import SubHeader from '../../subheader';

const defaultImg = require('../../../img/good_lung.png');

const EffectInfo = ({img, text, infoimg}) => <div>
    <div><img src={img} /></div>
    <div>{text}</div>
</div>;


EffectInfo.defaultProps = {
    img:defaultImg,
    text:info,
}

export default EffectInfo;