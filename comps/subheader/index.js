import React from 'react';
import './subhead.css';

const SubHeader = ({text,color, fontSize}) => <div>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <div style={{color:color,
    fontSize:fontSize}}
        className="subhead">{text}</div>
</div>;


SubHeader.defaultProps = {
    text: "Ingredients",
    color: "#C8553D",
    fontSize:40
}
export default SubHeader;