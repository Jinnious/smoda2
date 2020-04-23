import React from 'react';
import './about.css';


const defaultImg = require('./ammonia.png');

const IngredAbout = ({img,text}) => <div className="about">
    <div className="about_inner">
    <div className="about_img"> <img src={img} /></div>
    <div className="about_info">{text}</div>
    </div>
</div>;

IngredAbout.defaultProps = {
    img:defaultImg,
    text: "hello"
}


export default IngredAbout;