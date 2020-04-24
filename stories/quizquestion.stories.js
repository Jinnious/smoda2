import React from 'react';
// import defaultImg1 from '../comps/Quiz/Questions';
// import defaultImg2 from '../comps/Quiz/Questions';
import Questions from '../comps/Quiz/Questions';
import QuizSubHead1  from './subhead.stories';
import SubHeader from '../comps/subheader';


export default {
    title: 'Quiz 1',
    componets: Quiz1
};


export const Quiz1 = () =><div>
    <div><SubHeader text="Quiz 1" color="#F28F3C"/></div>
    <div><Questions /></div>
</div>

export const Quiz2 = () => <Questions text="If you smoke, does your brain size increase?"/>

export const Quiz3 = () => <Questions text="You may have damaged sense of taste if you smoke." />

export const Quiz4 = () => <Questions text="Smoking may give higher risks of lung cancer." />

export const Quiz5 = () => <Questions text="Smoking is actually good for your heart, as it increases blood circulations." />