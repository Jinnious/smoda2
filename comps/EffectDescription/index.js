import React from 'react';
import './dsct.css';
import BasicButton from '../buttons/button1';
import { Button1 } from '../../stories/Button.stories';
import Header from '../Header'
import SubHeader from '../../comps/subheader';
// import { LungFirst } from '../../stories/description.stories';




const EffectDescription = ({text,img,img2,title}) => <div className="dsct">
     <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="effect_head"><Header /></div>
   
<div id="sub"><div>{title} </div></div>
    <div className="bodycontents">
    <div className="des_img1"> <img src={img2} /></div>
    <div className="dsct_inner">
        <div className="about_info_effect">{text}</div>
        <div className="des_img"> <img src={img} /></div>
        
    </div>

    <div className="effect_footer_button"><Button1 /></div>



    </div>
</div>;

EffectDescription.defaultProps = {
    title: "Lungs",
    text: "Your lungs can be very badly affected by smoking. Coughs, colds, wheezing and asthma are just the start.",

}


export default EffectDescription;