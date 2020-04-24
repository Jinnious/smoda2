import React from 'react';
import './sound.css';


const defaultImg = require('./speakeron.png');
const defaultImg2 = require('./speakeroff.png');


const SettingPage = ({img, text}) => <div className="soundicon">
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

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