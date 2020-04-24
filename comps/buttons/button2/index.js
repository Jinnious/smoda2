import React from 'react';
import './button2.css';


const StartButton = ({text,  bgcolor, onMouseOver, onMouseOut}) => <div 
    style={{backgroundColor:bgcolor}}
    className="startbutton_box"
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    >
    <div className="startbutton_box_inner">
        {text}
       
    </div>
</div>

StartButton.defaultProps = {
    text:"Default Button",
    bgcolor: "#c8553D",
    onMouseOver:MouseOver,
    onMouseOut:MouseOut
}

function MouseOver(){
    document.querySelector(".startbutton_box").style.backgroundColor = "white";
    document.querySelector(".startbutton_box").style.border = "2px solid #c8553D";
    document.querySelector(".startbutton_box").style.color = "#c8553D";
}
function MouseOut(){
    document.querySelector(".startbutton_box").style.backgroundColor = "#c8553D";
    document.querySelector(".startbutton_box").style.border = "none";
    document.querySelector(".startbutton_box").style.color = "white";
}


export default StartButton;