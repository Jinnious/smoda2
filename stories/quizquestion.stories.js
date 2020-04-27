import React from 'react';
// import defaultImg1 from '../comps/Quiz/Questions';
// import defaultImg2 from '../comps/Quiz/Questions';
import Questions from '../comps/Quiz/Questions';
import QuizSubHead1  from './subhead.stories';
import SubHeader from '../comps/subheader';
import {GoHome} from './Button.stories';


export default {
    title: 'Quiz 1',
    componets: Quiz1
};


export const Quiz1 = () =>
    <div><Questions subhead="Quiz 1"/></div>
  


export const Quiz2 = () => <Questions text="If you smoke, does your brain size increase?" subhead="Quiz 2"/>


export const Quiz3 = () => <Questions text="You may have damaged sense of taste if you smoke." subhead="Quiz 3"/>

export const Quiz4 = () => <Questions text="Smoking may give higher risks of lung cancer." subhead="Quiz 4"/>
export const Quiz5 = () => <Questions text="Smoking is actually good for your heart, as it increases blood circulations." subhead="Quiz 5"/>



// export const Result = () => 

// <div>
//         <div><SubHeader text="Congrats!  You finished the Quiz"
        
//         color="#F28F3C"/></div>

//         <GoHome/>

// </div>

