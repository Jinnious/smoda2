import React from 'react';
import './question.css';
import BasicButton from '../../buttons/button1';
import Header from '../../Header';
import Link from 'next/link';
const defaultImg = require('./circle.png');
const defaultImg2 = require('./wrong.png');



const Questions = ({img1,img2}) => 

    <div className="background">
        <Header />
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
            <div className="subhead_quiz">Quiz 1</div>

            <div className="question_inner">

                <div className="about_info_quiz">"Is nicotine an ingredient of cigarette?"</div>

                <div className="quizicon">
                        <Link href='/Answer'><a><img src={img1} /></a></Link>
                        <img src={img2} />
                </div>
                <div className="quizbuttons"><BasicButton text='Back' bgcolor='#588B8B'/></div>
        
            </div>
    </div>;


Questions.defaultProps = {
    img1:defaultImg,
    img2:defaultImg2
}


export default Questions;