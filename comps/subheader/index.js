import React from 'react';
import './subhead.css';

const SubHeader = ({text, color}) => <div>
    <div style={{color:color}} 
        className="subhead">{text}</div>
</div>;


SubHeader.defaultProps = {
    text: "Ingredients",
    color: "#C8553D"
}
export default SubHeader;