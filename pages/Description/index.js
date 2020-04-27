import React from 'react';
import './description.css';
import Button1 from '../../stories/Button.stories';
import LungD from '../../stories/whitecomponent.stories';

const defaultLung = require('./bad_lung.png');

const Lungpage1 = ({img,organ_name}) => <div className="about">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="organ_name">{organ_name}</div>

    <div className="about_inner">
        <div className="about_img"> <img src={img} /></div>
        <LungD />
        <div><Button1 /></div>
    </div>

</div>;

Lungpage1.defaultProps = {
    img:defaultLung,
    orgna_name:"organ"
}


export default Lungpage1;