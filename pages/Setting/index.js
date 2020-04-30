import React from 'react';
import SettingIcon from '../../comps/icons';

import LanguageButton from '../../comps/buttons/button4';
import './setting.css';

import Link from 'next/link';


const defaultLogo = require('../../comps/logo/logo.png');
const defaultIcon = require('../../comps/icons/settings.png');


const SettingPage = ({Logo,Icon,text1,text2,text3}) => 
    

    <div id="settingpage">
    
    <Link href="/Start"><a>
    <img src={Icon} id="settingicon"/> 
    </a> </Link>


    <div id="logo"> <img src={Logo} /></div>


    <div className="texts" 
    style={{color:"#C8553D"}}>{text1}</div> 

    

    <div id="outline">
    <div id="setting_inner">

    <div className="texts"
    style={{color:"#588B8B"}}>{text2}</div> 

    <SettingIcon />

    <div className="texts"
    style={{color:"#F28F3B"}}>{text3}</div> 

    <div className="buttons">
    <LanguageButton  />
    <LanguageButton text ="English"/>
    <LanguageButton text ="Chinese"/>
    </div>
    </div>

    </div>




    </div>;
    



SettingPage.defaultProps ={
    text1:"Setting",

    text2:"Sound",
    text3:"Language",
    Logo:defaultLogo,
    Icon:defaultIcon

}


export default SettingPage;