import React from 'react';
import './answer.css';
import BasicButton from '../../buttons/button1';

const defaultImg = require('./circle.png');
const defaultImg2 = require('./wrong.png');


const QuestionAnswer = ({img1,img2,text1,text2}) => <div className="about">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <div className="question_inner">
    <div className="about_info">{text1}
    <div className="quizicon">
    <div className="right"> <img src={img1} /></div>
    <div className="wrong"> <img src={img2} /></div>

   </div>
   </div>

 <p className="quizbuttons">
     <div className="quizback"><BasicButton text="Back" bgcolor="rgb(105,138,137)"/></div>
 <div className="quiznext"><BasicButton text="Next" bgcolor="rgb(99,77,55)"/></div></p>

  
  

    </div>
</div>;

QuestionAnswer.defaultProps = {
    img1:defaultImg,
    img2:defaultImg2,
    text1: "Is nicotine an ingredient of cigarette?",
    text2: "Yes. Nicotine is an ingredient of cigaretteh."
}


export default QuestionAnswer;