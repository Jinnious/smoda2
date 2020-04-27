



import React from 'react';
import GoodEffectPage from '../../pages/GoodEffect';
import good_heart from '../../img/good_heart.png';
import good_lung from '../../img/good_lung.png';
import good_mouth from '../../img/good_mouth.png';
import good_brain from '../../img/good_barin.png';

import { Lungsubhead } from '../subhead.stories';
import { Heartsubhead } from '../subhead.stories';
import { Mouthsubhead } from '../subhead.stories';
import { Brainsubhead } from '../subhead.stories';




export default {
    title: 'GoodEffectPage',
 
};


export const GoodEffectHeart = () => <div>
    <Heartsubhead />
    <GoodEffectPage geimg={good_heart}/> </div>

export const GoodEffectLung = () => <div>
    <Lungsubhead />
    <GoodEffectPage geimg={good_lung}/>
    </div>
export const GoodEffectMouth = () => <div>
    <Mouthsubhead />
    <GoodEffectPage geimg={good_mouth}/></div>

export const GoodEffectBrain = () => <div>
    <Brainsubhead />
    <GoodEffectPage geimg={good_brain}/></div>





