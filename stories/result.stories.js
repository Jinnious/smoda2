import React from 'react';
// import defaultImg1 from '../comps/Quiz/Questions';
// import defaultImg2 from '../comps/Quiz/Questions';
import Result from '../comps/Quiz/Result';
import QuizSubHead1  from './subhead.stories';
import SubHeader from '../comps/subheader';
import {GoHome} from './Button.stories';

export default {
    title: 'Result',
    componets: Result
};

export const Result1 = () => 

<div>
        <div><SubHeader text="Congrats!  You finished the Quiz"
        
        color="#F28F3C"/></div>

        <GoHome/>

</div>