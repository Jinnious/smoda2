import React from 'react';
import StartButton from '../../comps/buttons/button2';



import './start.css';


const defaultLogo = require('../../comps/logo/logo.png');
const defaultIcon = require('../../comps/setting/icons/settings.png');


const StartPage = ({Logo,Icon,Aboutus}) => <div id="startpage">
 <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

 <img src={Icon} id="settingicon"/> 

<div className="startpage_inner">
        <img src={Logo} />


< StartButton text="Start" /> 
 <div id="aboutus">{Aboutus}</div>

</div>

</div>;



StartPage.defaultProps = {
    Aboutus:"About us",
    Logo:defaultLogo,
    Icon:defaultIcon
}




export default StartPage;