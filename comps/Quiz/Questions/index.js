import React from 'react';
import './question.css';
import BasicButton from '../../buttons/button1';
import { Button1 } from '../../../stories/Button.stories';
import Header from '../../Header';
const defaultImg = require('./circle.png');
const defaultImg2 = require('./wrong.png');


const Questions = ({img1,img2,text}) => <div className="background">
<Header />
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <div className="question_inner">
    <div className="about_info">{text}

    <div className="quizicon">
 <img src={img1} />
  <img src={img2} />
   </div>

   </div>
<div className="quizbuttons">
<Button1 />
</div>
  
  

    </div>
</div>;

Questions.defaultProps = {
    img1:defaultImg,
    img2:defaultImg2,
    text: "Is nicotine an ingredient of cigarette?"
}


export default Questions;