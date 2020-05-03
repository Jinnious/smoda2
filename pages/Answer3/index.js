import React from 'react';
import {data, ChangeData} from '../../data';
import '../../comps/Quiz/Answers/answer.css';
import BasicButton from '../../comps/buttons/button1';
import Header from '../../comps/Header';

import Router from 'next/router';



const AnswerPage = ({})=> {
    console.log(data);
    
    var subhead
    var quest
    var answer
    var img
    if(data.lastaction === "Select O_quiz3"){
        subhead="Quiz 3",
        quest="You may have damaged sense of taste if you smoke.",
        answer="Yes, smoking affects in your sense of taste.",
        img=require('../../comps/Quiz/Answers/circle.png')
    } 
    else{
        subhead="Quiz 3",
        quest="You may have damaged sense of taste if you smoke.",
        answer="No, smoking affects in your sense of taste.",
        img=require('../../comps/Quiz/Answers/wrong.png')
    }

    return<div className="background">
            <Header />
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
            <div className="subhead_quiz_answer">{subhead}</div>

            <div className="question_inner">
                <div className="about_info">
                    <div className="question_answer">{quest}</div>
            
                    <img src={img} />
            
                    <div className="answertext">{answer}</div>
                </div>

                <div className="quizbuttons" onClick={()=>{
                    Router.push("/Quiz4")
                }}>
                    <BasicButton text="Next" bgcolor="#F28F3C" />
                </div>

            </div>
        </div>
}



export default AnswerPage;