import React from 'react';
import './button2.css';


const StartButton = ({text,  bgcolor}) => <div 
    style={{backgroundColor:bgcolor}}
    className="startbutton_box"
  
    >
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <div className="xc">
        {text}
       
    </div>
</div>

StartButton.defaultProps = {
    text:"Default"
    
   
    // onMouseOver:MouseOver,
    // onMouseOut:MouseOut
}
///have to figure it out how to apply hovereffect on other buttons
// function MouseOver(){
//     document.querySelector(".startbutton_box").style.backgroundColor = "white";
//     document.querySelector(".startbutton_box").style.border = "2px solid #c8553D";
//     document.querySelector(".startbutton_box").style.color = "#c8553D";
// }
// function MouseOut(){
//     document.querySelector(".startbutton_box").style.backgroundColor = "#c8553D";
//     document.querySelector(".startbutton_box").style.border = "none";
//     document.querySelector(".startbutton_box").style.color = "white";
// }

//
export default StartButton;