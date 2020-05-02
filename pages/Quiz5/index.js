import React from 'react';
import '../../comps/Quiz/Questions/question.css';
import BasicButton from '../../comps/buttons/button1';
import Header from '../../comps/Header';
import Link from 'next/link';
const defaultImg = require('../../comps/Quiz/Questions/circle.png');
const defaultImg2 = require('../../comps/Quiz/Questions/wrong.png');



const Questions = ({img1,img2}) => 

    <div className="background">
        <Header />
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
            <div className="subhead_quiz">Quiz 5</div>

            <div className="question_inner">

                <div className="about_info_quiz">Smoking is actually good for your heart, as it increases blood circulations.</div>

                <div className="quizicon">
                        <Link href='/Answer'><a><img src={img1} /></a></Link>
                        <Link href='/Answer'><a><img src={img2} /></a></Link>
                </div>
                <div className="quizbuttons"><BasicButton text='Back' bgcolor='#588B8B'/></div>
        
            </div>
    </div>;


Questions.defaultProps = {
    img1:defaultImg,
    img2:defaultImg2
}


export default Questions;