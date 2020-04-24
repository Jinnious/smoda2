import React from 'react';
import './sound.css';


const defaultImg = require('./speakeron.svg');

const Setting = ({img, text}) => <div className="soundicon">

<div>
    <div className="soundiconwithtext">
    <img src={img} />
    {text}
    </div>


    <div className="soundiconwithtext">
    <img src={img} />
    {text}
    </div>

</div>

</div>


Sound.defaultProps = {

    text:"ON",
    img:defaltImg

}

export default Setting;