import React from 'react';
import './sound.css';


const defaultImg = require('./speakeron.png');
const defaultImg2 = require('./speakeroff.png');


const SettingPage = ({img, text}) => <div className="soundicon">

<div>
    <div className="soundiconwithtext">
    <img src={img} />
    <div> {text}</div>  
    </div>


    <div className="soundiconwithtext">
    <img src={defaultImg2} />
    <div> {text="OFF"}</div>  
    </div>

</div>

</div>


SettingPage.defaultProps = {

    text:"ON",
    
    img:defaultImg,
    img2:defaultImg2

}

export default SettingPage;