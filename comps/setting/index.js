import React from 'react';
import './sound.css';


const defaultImg = require('./speakeron.png');
const defaultImg2 = require('./speakeroff.png');


const SettingPage = ({img, text}) => <div className="soundicon">

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


SettingPage.defaultProps = {

    text:"ON",
    img:defaultImg,
    img2:defaultImg2

}

export default SettingPage;