import React from 'react';
import {data, ChangeData} from '../data';
import wrong from '../../comps/Quiz/Answers/wrong.png';
import right from '../../comps/Quiz/Answers/circle.png';
import '../../comps/Quiz/Answers/answer.css';
import BasicButton from '../../comps/buttons/button1';
import Header from '../../comps/Header';

import Router from 'next/router';
console.log(data);


const AnswerPage = ({text,text2,text3})=> {
    var subhead
    var quest
    var answer
    var img
    if(data.lastaction === "Select O"){
        subhead="Quiz 1",
        quest="Is nicotine an ingredient of cigarette?",
        answer="Yes, nicontine is an ingredient of cigarette.",
        img=require('../../comps/Quiz/Answers/circle.png')
    } 
    else{
        subhead="Quiz 1",
        quest="Is nicotine an ingredient of cigarette?",
        answer="Yes, nicontine is an ingredient of cigarette.",
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
                    Router.push("/Quiz2")
                }}>
                    <BasicButton text="Next" bgcolor="#588B8B" />
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