import React from 'react';
import EffectDescription from '../comps/EffectDescription';
import teeth from '../comps/EffectDescription/teeth.png';
import lung from '../comps/EffectDescription/lung.png';
import heart from '../comps/EffectDescription/heart.png';
import brain from '../comps/EffectDescription/brain.png';


export default {
    title: 'EffectDescription',
    componets: EffectDescription
};


export const LungD = () => <EffectDescription />

export const LungD2 = () => <EffectDescription text="Smoking puts you at a significantly higher risk of developing lung cancer." />

export const LungD3 = () => <EffectDescription text="" img={lung} />


export const HeartD= () => <EffectDescription text="Smoking damages your heart and your blood circulation, increasing the risk of conditions such as coronary heart disease, heart attack, stroke." />

export const HeartD2 = () => <EffectDescription text="Both people who smoke and those who are regularly exposed to secondhand smoke are at higher risk for heart attacks." />

export const HeartD3 = () => <EffectDescription text="" img={heart} />


export const YellowD = () => <EffectDescription text="Yellowish or brownish stains on the teeth are telltale signs of long-term smoking. It also causes a bad breath." />

export const YellowD2 = () => <EffectDescription text="Your sense of smell and taste can be dulled by smoking, which can decrease your appetite." />

export const YellowD3 = () => <EffectDescription text="" img={teeth} />


export const BrainD = () => <EffectDescription text="Smoking causes loss of memory, loss of brain volume. You will also lose control over emotions." />

export const BrainD2 = () => <EffectDescription text="Increases risk of having a stroke by at least 50%, which can cause brain damage and death." />

export const BrainD3 = () => <EffectDescription text="" img={brain}/>