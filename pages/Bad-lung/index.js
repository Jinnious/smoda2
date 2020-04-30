import {useState, useEffect} from 'react';
import Header from '../../comps/Header'
import BasicButton from '../../comps/buttons/button1';
import Bad_Lung from '../../comps/EffectDescription/bad_lung.png';
import '../../comps/EffectDescription/dsct.css';
import Link from 'next/link';

import realLung from '../../comps/EffectDescription/lung.png';

// var index = 0;
// const lung_info_array = ["Smoking puts you at a significantly higher risk of developing lung cancer."]


const EffectDescription = ({img}) => {
    const [lung_info, changeInfo] = useState("Your lungs can be very badly affected by smoking. Coughs, colds, wheezing and asthma are just the start.")


    return<div className="dsct">
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

            <div className="effect_head"><Header /></div>
        
        <div id="sub"><div>Lung </div></div>
            <div className="bodycontents">
            <div className="des_img1"> <img src={Bad_Lung} /></div>
            <div className="dsct_inner">
                <div className="about_info_effect">{lung_info}</div>
                <div className="des_img"> <img src={img} /></div>
                
            </div>

            <div className="effect_footer_button">
                <Link href="/Lung"><a><BasicButton text="Back" bgcolor="#588B8B"/></a></Link>
                <BasicButton text="Next" bgcolor="#F28F3C" onClick={()=>{
                    changeInfo("Smoking puts you at a significantly higher risk of developing lung cancer.");
                }}/>
            </div>



            </div>
        </div>
}



export default EffectDescription;