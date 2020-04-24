import React from 'react';
import './subhead.css';

const SubHeader = ({text, color}) => <div>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <div style={{color:color}} 
        className="subhead">{text}</div>
</div>;


SubHeader.defaultProps = {
    text: "Ingredients",
    color: "#C8553D"
}
export default SubHeader;