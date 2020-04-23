import React from 'react';
import './button3.css';
import smk from './smoking.png';

const OptionButton = ({text, img, bgcolor, onMouseOver, onMouseOut}) => <div 
    style={{backgroundColor:bgcolor}}
    className="optionbutton_box"
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    >
    <div className="xc">
        {text}
        <img src={smk} alt="smk" />
    </div>
</div>

OptionButton.defaultProps = {
    text:"Default Button",
    img: smk,
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


export default OptionButton;


