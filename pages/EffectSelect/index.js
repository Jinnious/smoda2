import React from 'react';
import './select.css';
import SubHeader from '../../comps/subheader';
import TheOrgan from '../../comps/SideEffects/organ';
import lung from '../../img/good_lung.png';
import heart from '../../img/good_heart.png';
import brain from '../../img/brain_cover.png';
import mouth from '../../img/good_mouth.png';
import Header from '../../comps/Header';
import {DefaultButton1} from '../../stories/Button.stories';
import Link from 'next/link';
import Router from 'next/router';
import {stage, ChangeStage} from '../../data';

console.log(stage);
const EffectSelect = () => <div>

    <div className="selectpage">
        <div className="effectselect_head"><Header/></div>

        <div id="sub"><SubHeader text="Side-Effects" color="#588B8B"/></div>

        <div className="organ_select">
            <div className="firstline">
                <Link href="/Lung"><a><TheOrgan text="Lung" img={lung}/></a></Link> 
                <Link href="/Heart"><a><TheOrgan text="Heart" img={heart}/></a></Link>
            </div>
            <div className="secondline">
                <Link href="/Mouth"><a><TheOrgan text="Mouth" img={mouth}/> </a></Link>
                <Link href="/Brain"><a><TheOrgan text="Brain" img={brain}/> </a></Link>
            </div>
        </div>
        <div className="back_button"><Link href="/Option"><a><DefaultButton1/></a></Link></div>
    </div>

   
</div>;

export default EffectSelect;