import React from 'react';
import './answer.css';
import BasicButton from '../../buttons/button1';
import { Button1 } from '../../../stories/Button.stories';
import Header from '../../Header';
const defaultImg = require('./circle.png');


const QuestionsAnswer1 = ({img1,text,text2}) => <div className="background">
<Header />
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <div className="question_inner">
    <div className="about_info">{text}

    <div className="quiziconanswer">
 <img src={img1} />
   </div>
<div className="answertext">{text2}</div>
   </div>
<div className="quizbuttons">
<Button1 />
</div>
  
  

    </div>
</div>;

QuestionsAnswer1.defaultProps = {
    img1:defaultImg,
    text: "Is nicotine an ingredient of cigarette?",
    text2: "Yes, nicontine is an ingredient of cigarette.",


}


export default QuestionsAnswer1;