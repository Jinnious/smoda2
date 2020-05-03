import React from 'react';
import '../../comps/ingredients/about/about.css';
import BasicButton from '../../comps/buttons/button1';
import Headers from '../../comps/Header';
import Router from 'next/router';

import nic from '../../comps/ingredients/about/nicotine.png';

const IngredAbout = ({}) => <div className="about">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="head"><Headers /></div>
    <div></div>
    <div className="about_inner">
        <div className="about_img"> <img src={nic} /></div>
        <div className="about_info">{"Nicotine is a chemical compound that is present in tobacco. Nicotine is a dangerous and highly addictive chemical. It can cause an increase in blood pressure, heart rate, flow of blood to the heart."}</div>

    </div>
    <div className="backbutton_about"><BasicButton text="Back" bgcolor="rgb(105,138,137)" onClick={()=>{
        Router.push('/Ingred');
    }}/><BasicButton text="Next" onClick={()=>{
        Router.push('/Benzene');
    }} /></div>
</div>;


export default IngredAbout;