import React from 'react';
import SettingPage from './icons';
import SubHeader from '../../comps/subheader';
import LanguageButton from '../buttons/button4';
import './settingpage.css';



const SettingPage2 = ({}) => 
    



    <div id="setting">

    <div id="setting_heading">
    <SubHeader text="Setting" fontSize={47}/>
    </div>

    <div id="setting_inner">

    <SubHeader text="Sound" color="#588B8B"/>

    <SettingPage />

    <SubHeader text="Language" color="#F28F3B"/>
    <div className="buttons">
    <LanguageButton  />
    <LanguageButton text ="English"/>
    <LanguageButton text ="Chinese"/>
    </div>

    </div>




    </div>;
    






SettingPage2.defaultProps ={


}


export default SettingPage2;