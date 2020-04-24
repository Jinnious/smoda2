import React from 'react';
import './question.css';
import BasicButton from '../../buttons/button1';

const defaultImg = require('./circle.png');
const defaultImg2 = require('./wrong.png');


const Questions = ({defaultImg,defaultImg2,text}) => <div className="about">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="about_inner">
    <div className="about_info">{text}
    <div className="about_img"> <img src={defaultImg} /></div>
    <div className="about_img"> <img src={defaultImg2} /></div>
   
   </div>

 <p><BasicButton text="Back" bgcolor="rgb(105,138,137)"/></p>
  
  

    </div>
</div>;

Questions.defaultProps = {
    img:defaultImg, defaultImg2,
    text: "Is nicotine an ingredient of cigarette?"
}


export default Questions;