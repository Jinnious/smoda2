import React from 'react';
import './button3.css';


const Button3 = ({text, bgcolor, onMouseOver, onMouseOut}) => <div 
    style={{backgroundColor:bgcolor}}
    className="startbutton_box"
  
     >
    <div className="startbutton_box_inner">
        {text}
    </div>
</div>

Button3.defaultProps = {
    text:"Default Button",
    bgcolor: "#c8553D",
 
}
