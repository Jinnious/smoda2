import React from 'react';
import StartButton from '../../comps/buttons/button2';
import Link from 'next/link';
import Router from 'next/router';


import './start.css';


const defaultLogo = require('../../comps/logo/logo.png');
const defaultIcon = require('../../comps/icons/settings.png');



function Start () {

    document.querySelector("#start");
    Router.push("/Topic");
}




const StartPage = ({Logo,Icon,Aboutus}) => <div id="startpage">
 <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

 <img src={Icon} id="settingicon"/> 

<div className="startpage_inner">
        <img src={Logo} />

<Link href="/Topic"><a>
< StartButton text="Start" /> 
</a>
</Link>
    

 <div id="aboutus">{Aboutus}</div>

</div>  

</div>;



StartPage.defaultProps = {
    Aboutus:"About us",
    Logo:defaultLogo,
    Icon:defaultIcon
}




export default StartPage;


