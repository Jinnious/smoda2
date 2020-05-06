import React from 'react';
import {data, ChangeData} from '../../data';
import '../../comps/Quiz/Answers/answer.css';
import BasicButton from '../../comps/buttons/button1';
import Header from '../../comps/Header';

import Router from 'next/router';
console.log(data);


const AnswerPage = ({})=> {
    var subhead
    var quest
    var answer
    var img
    var answer_color
    if(data.lastaction === "Select O"){
        subhead="Quiz 1",
        quest="Is nicotine an ingredient of cigarette?",
        answer="Yes, nicontine is an ingredient of cigarette.",
        img=require('../../img/correct_a.png'),
        answer_color="You are Right!"
    } 
    else{
        subhead="Quiz 1",
        quest="Is nicotine an ingredient of cigarette?",
        answer="Yes, nicontine is an ingredient of cigarette.",
        img=require('../../img/wrong_a.png'),
        answer_color="You are Wrong!"
    }

    return<div className="background">
            <Header />
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
            <div className="subhead_quiz_answer">{subhead}</div>

            <div className="question_inner">
                <div className="about_info">
                    <div className="question_answer">{quest}</div>
                    <div className="color_answer">{answer_color}</div>
                    <img src={img} />
            
                    <div className="answertext">{answer}</div>
                </div>

                <div className="quizbuttons" onClick={()=>{
                    Router.push("/Quiz2")
                }}>
                    <BasicButton text="Next" bgcolor="#F28F3C" />
                </div>

            </div>
        </div>
}



AnswerPage.defaultProps = {
    text: "Is nicotine an ingredient of cigarette?",
    text2: "Yes, nicontine is an ingredient of cigarette.",
    text3: "Quiz"
}


export default AnswerPage;