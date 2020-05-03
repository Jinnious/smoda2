import React from 'react';
import '../../comps/ingredients/about/about.css';
import BasicButton from '../../comps/buttons/button1';
import Headers from '../../comps/Header';
import Link from 'next/link';
import Router from 'next/router';
import xicon from '../../img/xicon.png';

import ben from '../../comps/ingredients/about/benzene.png';

const IngredAbout = ({}) => <div className="about">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="head"><Headers /></div>
    <div><img src={xicon} className='xicon'onClick={()=>{
        Router.push('/Ingred');
    }}/></div>
    <div className="about_inner">
        <div className="about_img"> <img src={ben} /></div>
        <div className="about_info">{"Benzene causes harmful effects on the bone marrow and can cause a decrease in red blood cells. It can also cause a lot of bleeding and can affect the immune system, increasing the chance for infection."}</div>

    </div>
    <div className="backbutton_about"><BasicButton text="Back" bgcolor="rgb(105,138,137)" onClick={()=>{
        Router.push('/Nicotine');
    }}/><BasicButton text="Next" onClick={()=>{
        Router.push('/Ammonia');
    }} /></div>
</div>;


export default IngredAbout;