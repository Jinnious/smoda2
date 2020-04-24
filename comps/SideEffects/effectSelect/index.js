import React from 'react';
import './effect.css';
import SubHeader from '../../subheader';
import TheOrgan from '../organ';
import lung from '../../../img/good_lung.png';
import heart from '../../../img/good_heart.png';
import brain from '../../../img/brain_cover.png';
import mouth from '../../../img/good_mouth.png';

const EffectSelect = () => <div>
    <div className="selectpage">
        <div><SubHeader text="Side-Effects" color="#588B8B"/></div>
        <div className="organ_select">
            <div className="firstline"><TheOrgan text="Lung" img={lung}/> <TheOrgan text="Heart" img={heart}/></div>
            <div><TheOrgan text="Mouth" img={mouth}/> <TheOrgan text="Brain" img={brain}/></div>
        </div>
    </div>
</div>;

export default EffectSelect;