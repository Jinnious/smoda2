import React from 'react';
import './dsct.css';



const EffectDescription = ({text}) => <div className="dsct">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="dsct_inner">
     
        <div className="about_info">{text}</div>
    </div>
</div>;

EffectDescription.defaultProps = {

    text: "Ammonia is a strong, colorless gas. If the gas is dissolved in water, it is called liquid ammonia. Poisoning may occur if you breathe in ammonia or if you swallow or touch products that contain very large amounts of ammonia."
}


export default EffectDescription;