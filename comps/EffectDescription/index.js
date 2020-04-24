import React from 'react';
import './dsct.css';



const EffectDescription = ({text,img}) => <div className="dsct">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="dsct_inner">
     
        <div className="about_info">{text}</div>
        <div className="des_img"> <img src={img} /></div>

    </div>
</div>;

EffectDescription.defaultProps = {

    text: "Your lungs can be very badly affected by smoking. Coughs, colds, wheezing and asthma are just the start."
}


export default EffectDescription;