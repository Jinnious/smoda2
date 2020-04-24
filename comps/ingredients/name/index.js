import React from 'react';
import './name.css';

const IngName = ({text, color, border}) => <div>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <div className="ing_name" style={{color:color, border:border}}>
        <div className="name_inner">{text}</div>
    </div>
</div>;

IngName.defaultProps = {
    text:"name",
    color:"#588B8B",
    border:"#588B8B 3px solid"
}

export default IngName;