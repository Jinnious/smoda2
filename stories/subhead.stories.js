import React from 'react';
import SubHeader from '../comps/subheader';


export default {
    title: 'subhead',
    componets: SubHeader
};

export const IngredSubHead = () => <SubHeader />

export const EffectsSubHead = () => <SubHeader text="Side-Effects" color="#588B8B"/>

export const OrgansSubHead = () => <div>
    <div><SubHeader text="Lungs" color="#588B8B" /></div>
    <div><SubHeader text="Heart" color="#588B8B" /></div>
    <div><SubHeader text="Mouth" color="#588B8B" /></div>
    <div><SubHeader text="Brain" color="#588B8B" /></div>
</div>

export const QuizSubHead = () => <SubHeader text="Quiz 1" color="#F28F3C"/>
