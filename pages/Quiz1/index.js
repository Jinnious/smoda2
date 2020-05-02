import React from 'react';
import '../../comps/Quiz/Questions/question.css';
import BasicButton from '../../comps/buttons/button1';
import Header from '../../comps/Header';
import Link from 'next/link';
const defaultImg = require('../../comps/Quiz/Questions/circle.png');
const defaultImg2 = require('../../comps/Quiz/Questions/wrong.png');
import Router from 'next/router';



const Questions = ({img1,img2}) => {

    return<div className="background">
        <Header />
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
            <div className="subhead_quiz">Quiz 1</div>

            <div className="question_inner">

                <div className="about_info_quiz">Is nicotine an ingredient of cigarette?</div>

                <div className="quizicon">
                        <img src={img1} onClick={()=> {
                            Router.push("/Answer");
                        }}/>
                        <img src={img2} onClick={()=> {
                            Router.push("/Answer");
                        }}/>
                </div>
                <div className="quizbuttons"><BasicButton text='Back' bgcolor='#588B8B' onClick={()=>{
                    Router.push("/Answer")
                }}/></div>
        
            </div>
    </div>
}


Questions.defaultProps = {
    img1:defaultImg,
    img2:defaultImg2
}


export default Questions;