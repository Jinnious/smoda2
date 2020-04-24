import React from 'react';
import TheOrgan from '../comps/SideEffects/organ';
import lung from '../img/good_lung.png';
import heart from '../img/good_heart.png';
import brain from '../img/brain_cover.png';
import mouth from '../img/good_mouth.png';
import EffectSelect from '../comps/SideEffects/effectSelect';



export default {
    title: 'Organselect',
    componets: TheOrgan
};

export const DefaultOrgan = () => <TheOrgan />

export const Lung = () => <TheOrgan text="Lung" img={lung}/>

export const Heart = () => <TheOrgan text="Heart" img={heart}/>
export const Brain = () => <TheOrgan text="Brain" img={brain}/>
export const Mouth = () => <TheOrgan text="Mouth" img={mouth}/>


export const EffectSelectPage = () => <EffectSelect />