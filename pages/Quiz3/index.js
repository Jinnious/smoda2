import React from 'react';
import '../../comps/Quiz/Questions/question.css';
import BasicButton from '../../comps/buttons/button1';
import Header from '../../comps/Header';
const defaultImg = require('../../comps/Quiz/Questions/circle.png');
const defaultImg2 = require('../../comps/Quiz/Questions/wrong.png');
import Router from 'next/router';
import {data, ChangeData} from '../data.js';



const Questions = ({img1,img2}) => {
    console.log(data);

    return<div className="background">
        <Header />
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
            <div className="subhead_quiz">Quiz 3</div>

            <div className="question_inner">

                <div className="about_info_quiz">You may have damaged sense of taste if you smoke.</div>

                <div className="quizicon">
                        <img src={img1} onClick={()=>{
                            ChangeData({
                                lastaction:"Select O_quiz3"
                            })
                            Router.push("/Answer3");
                        }}/>
                        <img src={img2} onClick={()=>{
                            ChangeData({
                                lastaction:"Select X_quiz3"
                            })
                            Router.push("/Answer3");
                        }}/>
                </div>
                <div className="quizbuttons"><BasicButton text='Back' bgcolor='#588B8B' onClick={()=>{
                    Router.push("/Quiz2")
                }}/></div>
        
            </div>
    </div>
}

Questions.defaultProps = {
    img1:defaultImg,
    img2:defaultImg2
}


export default Questions;