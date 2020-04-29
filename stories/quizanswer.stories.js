import React from 'react';
// import defaultImg1 from '../comps/Quiz/Questions';
// import defaultImg2 from '../comps/Quiz/Questions';
import QuestionAnswer1 from '../comps/Quiz/Answers';

import SubHeader from '../comps/subheader';
import wrong from '../comps/Quiz/Answers/wrong.png';

export default {
    title: 'Answer1',
    componets: Answer1
};


export const Answer1 = () =><QuestionAnswer1 text3="Quiz 1"/>

export const Answer2 = () => <QuestionAnswer1 text="If you smoke, does your brain size increase?"
text2="No. It becomes smaller instead." text3="Quiz 2" img1={wrong} />

export const Answer3 = () => <QuestionAnswer1 text="You may have damaged sense of taste if you smoke." 
text2="Yes, smoking affects in your sense of taste." text3="Quiz 3"/>

export const Answer4 = () => <QuestionAnswer1 text="Smoking may give higher risks of lung cancer."
text2="Yes, smoking gives higher risks of lung cancer and even other lung diseases." text3="Quiz 4"/>
export const Answer5 = () => <QuestionAnswer1 img1={wrong}  text2="No,smoking increases the risk of conditions such as coronary heart disease, heart attack, stroke." text="Smoking is actually good for your heart, as it increases blood circulations." text3="Quiz 5"/>