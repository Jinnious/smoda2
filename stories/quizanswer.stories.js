import React from 'react';
// import defaultImg1 from '../comps/Quiz/Questions';
// import defaultImg2 from '../comps/Quiz/Questions';
import QuestionAnswer1 from '../comps/Quiz/Answers';

import SubHeader from '../comps/subheader';


export default {
    title: 'Answer1',
    componets: Answer1
};


export const Answer1 = () =><div>
    <div><SubHeader text="Quiz 1" color="#F28F3C"/></div>
    <div><QuestionAnswer1 /></div>
</div>

export const Answer2 = () => <div>
    <div><SubHeader text="Quiz 2" color="#F28F3C"/></div>
<div><QuestionAnswer1 text="If you smoke, does your brain size increase?"
text2=""
/></div>
</div>

export const Answer3 = () => <div>
        <div><SubHeader text="Quiz 3" color="#F28F3C"/></div>

    <div><QuestionAnswer1 text="You may have damaged sense of taste if you smoke." 
    text2="Yes, smoking affects in your sense of taste."
    /></div>
    </div>

export const Answer4 = () => 
<div>
        <div><SubHeader text="Quiz 4" color="#F28F3C"/></div>

    <div><QuestionAnswer1 text="Smoking may give higher risks of lung cancer."
    text="Yes, smoking gives higher risks of lung cancer and even other lung diseases."
    /></div>
</div>
export const Answer5 = () => 

<div>
        <div><SubHeader text="Quiz 5" color="#F28F3C"/></div>

    <div><QuestionAnswer1 text="Smoking is actually good for your heart, as it increases blood circulations." /></div>
</div>