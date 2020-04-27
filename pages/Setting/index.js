import React from 'react';
import SettingIcon from '../../comps/icons';
import SubHeader from '../../comps/subheader';
import LanguageButton from '../../comps/buttons/button4';
import './setting.css';



const SettingPage = ({}) => 
    



    <div id="setting">

    <div id="setting_heading">
    <SubHeader text="Setting" fontSize={47}/>
    </div>

    <div id="setting_inner">

    <SubHeader text="Sound" color="#588B8B"/>

    <SettingIcon />

    <SubHeader text="Language" color="#F28F3B"/>
    <div className="buttons">
    <LanguageButton  />
    <LanguageButton text ="English"/>
    <LanguageButton text ="Chinese"/>
    </div>

    </div>




    </div>;
    






SettingPage.defaultProps ={


}


export default SettingPage;