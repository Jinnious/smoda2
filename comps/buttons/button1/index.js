
import React from 'react';
import './button1.css';

const BasicButton = ({text, bgcolor}) => <div 
style={{backgroundColor:bgcolor}}
className="custom_button_box">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

BasicButton.defaultProps = {
    text: "Default",
    bgcolor: "rgb(242,143,60)"
}
export default BasicButton;