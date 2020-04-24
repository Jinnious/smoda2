import React from 'react';
import './organ.css';

const defaultImg = require('../../../img/good_lung.png')


const TheOrgan = ({img, text}) => <div className="organ">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <div className="organ_img"><img src={img} /></div>
    <div className="organ_name">{text}</div>
</div>;


TheOrgan.defaultProps = {
    text:"Organ",
    img:defaultImg
}

export default TheOrgan;