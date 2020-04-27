import React from 'react';
import './result.css';
import BasicButton from '../../buttons/button1';
import { Button1 } from '../../../stories/Button.stories';
import Header from '../../Header';



const Result = ({text}) => <div className="resultsbackg">
<Header />
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <div>
    <div>{text}

   </div>
<Button1 />

  
  

    </div>
</div>;

Result.defaultProps = {
 
    text: "Is nicotine an ingredient of cigarette?"
}


export default Result;