import React from 'react';
import StartButton from '../../comps/buttons/button2';
import SubHeader from '../../comps/subheader';


import './start.css';


const defaultLogo = require('../../comps/logo/logo.png');
const defaultIcon = require('../../comps/setting/icons/settings.png');


const StartPage = ({Logo,Icon}) => <div id="startpage">


 <img src={Icon} id="settingicon"/> 

<div className="startpage_inner">
        <img src={Logo} />


<StartButton text="Start"/>
<SubHeader text="About us" color="#588B8B" fontSize={30}/>

</div>

</div>;



StartPage.defaultProps = {
  
    Logo:defaultLogo,
    Icon:defaultIcon
}




export default StartPage;