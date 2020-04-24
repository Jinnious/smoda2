import React from 'react';
// import defaultImg1 from '../comps/Quiz/Questions';
// import defaultImg2 from '../comps/Quiz/Questions';
import Questions from '../comps/Quiz/Questions';
import QuizSubHead1  from './subhead.stories';
import SubHeader from '../comps/subheader';
import QuestionAnswer from '../comps/Quiz/Questions';


export default {
    title: 'Quiz 1',
    componets: Quiz1
};


export const Quiz1 = () =><div>
    <div><SubHeader text="Quiz 1" color="#F28F3C"/></div>
    <div><Questions /></div>
  

</div>

export const Quiz2 = () => <div>
    <div><SubHeader text="Quiz 2" color="#F28F3C"/></div>
<div><Questions text="If you smoke, does your brain size increase?"/></div>
</div>

export const Quiz3 = () => <div>
        <div><SubHeader text="Quiz 3" color="#F28F3C"/></div>

    <div><Questions text="You may have damaged sense of taste if you smoke." /></div>
    </div>

export const Quiz4 = () => 
<div>
        <div><SubHeader text="Quiz 4" color="#F28F3C"/></div>

    <div><Questions text="Smoking may give higher risks of lung cancer." /></div>
</div>
export const Quiz5 = () => 

<div>
        <div><SubHeader text="Quiz 5" color="#F28F3C"/></div>

    <div><Questions text="Smoking is actually good for your heart, as it increases blood circulations." /></div>
</div>