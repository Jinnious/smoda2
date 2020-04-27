import React from 'react';
import './start.css';
import StartButton from '../../comps/buttons/button2';

const logoImg = require('../../comps/Header/logo.svg');
const Setting = require('../../comps/setting/icons/settings.png');


const StartPage = () => <div>
    <div className="setting">
        <img src={Setting} />
    </div>

    <div className="logo">
       <img src={logoImg} />
    </div>
    <div className="startbut">
        <StartButton text="Start" bgcolor="c8553D"/>
    </div>
    <div className="about_us">
        About us
    </div>
</div>


export default StartPage;