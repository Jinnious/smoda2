import React from 'react';
import './dsct.css';
import BasicButton from '../buttons/button1';
import { Button1 } from '../../stories/Button.stories';
import Header from '../Header'

const EffectDescription = ({text,img,img2}) => <div className="dsct">
    <Header />
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <div className="des_img1"> <img src={img2} /></div>
    <div className="dsct_inner">
        <div className="about_info">{text}</div>
        <div className="des_img"> <img src={img} /></div>
        
    </div>
    <Button1 />
</div>;

EffectDescription.defaultProps = {

    text: "Your lungs can be very badly affected by smoking. Coughs, colds, wheezing and asthma are just the start.",
   
}


export default EffectDescription;