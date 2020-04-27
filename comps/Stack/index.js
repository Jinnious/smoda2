import React from 'react';
import './stack.css';




const Stack = ({text,backgroundColor}) => <div 
style={{backgroundColor:backgroundColor}}
className="stack">

<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

        <div className="stack_inner"> 
        {text}  </div>

</div>;

Stack.defaultProps = {
    text:"Advanced",
   backgroundColor:"#707071"
}


export default Stack;