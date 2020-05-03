import React from 'react';
import '../../comps/ingredients/about/about.css';
import BasicButton from '../../comps/buttons/button1';
import Headers from '../../comps/Header';
import Link from 'next/link';
import Router from 'next/router';

import tar from '../../comps/ingredients/about/tar.png';

const IngredAbout = ({}) => <div className="about">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="head"><Headers /></div>
    <div></div>
    <div className="about_inner">
        <div className="about_img"> <img src={tar} /></div>
        <div className="about_info">{"Tar is the word for the solid particles suspended in tobacco smoke. The particles contain chemicals, including cancer-causing substances. Tar is sticky and brown, and stains teeth, fingernails."}</div>

    </div>
    <div className="backbutton_about"><BasicButton text="Back" bgcolor="rgb(105,138,137)" onClick={()=>{
        Router.push('/Butane');
    }}/><BasicButton text="Next" onClick={()=>{
        Router.push('/Ingred');
    }} /></div>
</div>;


export default IngredAbout;