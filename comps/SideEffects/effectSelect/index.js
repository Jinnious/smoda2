import React from 'react';
import './effect.css';
import SubHeader from '../../subheader';
import TheOrgan from '../organ';
import lung from '../../../img/good_lung.png';
import heart from '../../../img/good_heart.png';
import brain from '../../../img/brain_cover.png';
import mouth from '../../../img/good_mouth.png';
import Header from '../../Header';
import {DefaultButton1} from '../../../stories/Button.stories';
import Link from 'next/link';


const EffectSelect = () => <div>
    <div className="selectpage">
        <Header/>

        <div id="sub"><SubHeader text="Side-Effects" color="#588B8B"/></div>

        <div className="organ_select">
            <div className="firstline">
                <TheOrgan text="Lung" img={lung}/> 
                <TheOrgan text="Heart" img={heart}/></div>
            <div className="secondline"><TheOrgan text="Mouth" img={mouth}/> <TheOrgan text="Brain" img={brain}/></div>
        </div>
        <div className="back_button"><DefaultButton1/></div>
    </div>

   
</div>;

export default EffectSelect;