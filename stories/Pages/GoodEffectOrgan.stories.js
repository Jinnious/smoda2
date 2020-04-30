



import React from 'react';
import GoodEffectPage from '../../pages/GoodEffect';
import good_heart from '../../img/good_heart.png';
import good_lung from '../../img/good_lung.png';
import good_mouth from '../../img/good_mouth.png';
import good_brain from '../../img/good_brain.png';




export default {
    title: 'GoodEffectPage',
 
};


export const GoodEffectHeart = () => <div>
    <GoodEffectPage geimg={good_heart} text="Heart"/> </div>

export const GoodEffectLung = () => <div>
    <GoodEffectPage geimg={good_lung} text="Lung"/>
    </div>
export const GoodEffectMouth = () => <div>
    <GoodEffectPage geimg={good_mouth} text="Mouth"/></div>

export const GoodEffectBrain = () => <div>
    <GoodEffectPage geimg={good_brain} text=" Brain" /></div>





