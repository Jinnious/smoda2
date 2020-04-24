import React from 'react';
import './about.css';
import BasicButton from '../../buttons/button1';

const defaultImg = require('./ammonia.png');

const IngredAbout = ({img,text}) => <div className="about">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <div className="about_inner">
    <div className="about_img"> <img src={img} /></div>
    <div className="about_info">{text}
   
   </div>

   <BasicButton text="Back" bgcolor="rgb(105,138,137)"/>
  
  

    </div>
</div>;

IngredAbout.defaultProps = {
    img:defaultImg,
    text: "Ammonia is a strong, colorless gas. If the gas is dissolved in water, it is called liquid ammonia. Poisoning may occur if you breathe in ammonia or if you swallow or touch products that contain very large amounts of ammonia."
}


export default IngredAbout;