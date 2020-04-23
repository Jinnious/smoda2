
import React from 'react';
import './button1.css';

const BasicButton = ({text, bgcolor}) => <div 
style={{backgroundColor:bgcolor}}
className="custom_button1_box">
    <div className="custom_button1_box_inner">
        {text}
    </div>
</div>

BasicButton.defaultProps = {
    text: "Def",
    bgcolor: "rgb(242,143,60)"
}
export default BasicButton;