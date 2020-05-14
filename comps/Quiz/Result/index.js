import React from 'react';
import './result.css';
import BasicButton from '../../buttons/button1';
import { Button1 } from '../../../stories/Button.stories';
import Header from '../../Header';
import {GoHome} from '../../../stories/Button.stories';
import Router from 'next/router';
import {data, ChangeData} from '../../../data';





const Result = ({}) => {
    console.log(data);

    var text = "";

    switch (data.right){
        case 0:
            text +="0/5";
            break;
        case 1:
            text ="1/5";
            break;    
    }

    return<div className="resultsbackg">
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    
        
            <Header/>

            <div id="rinner"
            style={{color:"#F28F3C", fontSize:(40)}}>

                <div>
                    Congrats!
                </div>
                <div>
                    You finished the Quiz :)
                </div>
                <div>
                    Your score is {text}
                </div>

            </div>

            <div id="button" onClick={()=>{
                Router.push("/Option")
            }}>
        <GoHome/>
            </div>


    

        </div>
}

Result.defaultProps = {

}





export default Result;