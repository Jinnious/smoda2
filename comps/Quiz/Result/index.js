import React from 'react';
import './result.css';
import BasicButton from '../../buttons/button1';
import { Button1 } from '../../../stories/Button.stories';
import Header from '../../Header';
import {GoHome} from '../../../stories/Button.stories';
import SubHeader from '../../../comps/subheader';


const Result = ({text}) => <div className="resultsbackg">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
  
    
         <Header/>

        <div id="rinner"
        style={{color:"#F28F3C", fontSize:(40)}}>

            {text} 

        </div>

        <div id="button" >
       <GoHome/>
        </div>


  

    </div>

Result.defaultProps = {
text:"Congrats! \
\n You finished the Quiz"
}





export default Result;