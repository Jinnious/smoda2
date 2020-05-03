import React from 'react';
import '../../comps/ingredients/about/about.css';
import BasicButton from '../../comps/buttons/button1';
import Headers from '../../comps/Header';
import Link from 'next/link';

import but from '../../comps/ingredients/about/butane.png';

const IngredAbout = ({}) => <div className="about">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="head"><Headers /></div>
    <div></div>
    <div className="about_inner">
        <div className="about_img"> <img src={but} /></div>
        <div className="about_info">{"Butane slows down the activity of the brain, affecting physical and mental responses. When butane is inhaled, the fumes are absorbed rapidly through the lungs into the bloodstream."}</div>

    </div>
    <div className="backbutton_about"><BasicButton text="Back" bgcolor="rgb(105,138,137)" onClick={()=>{
        Router.push('/Ammonia');
    }}/><BasicButton text="Next" onClick={()=>{
        Router.push('/Tar');
    }} /></div>
</div>;


export default IngredAbout;