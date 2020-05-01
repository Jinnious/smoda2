import React from 'react';
import '../../comps/ingredients/about/about.css';
import BasicButton from '../../comps/buttons/button1';
import Headers from '../../comps/Header';
import Link from 'next/link';

import ben from '../../comps/ingredients/about/benzene.png';

const IngredAbout = ({}) => <div className="about">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="head"><Headers /></div>
    <div></div>
    <div className="about_inner">
        <div className="about_img"> <img src={ben} /></div>
        <div className="about_info">{"Ammonia is a strong, colorless gas. If the gas is dissolved in water, it is called liquid ammonia. Poisoning may occur if you breathe in ammonia or if you swallow or touch products that contain very large amounts of ammonia."}</div>

    </div>
    <div className="backbutton_about"><Link href="/Ingred"><a><BasicButton text="Back" bgcolor="rgb(105,138,137)" /></a></Link></div>
</div>;


export default IngredAbout;