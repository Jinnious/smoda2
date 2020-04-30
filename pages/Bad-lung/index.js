import {useState, useEffect} from 'react';
import Header from '../../comps/Header'
import BasicButton from '../../comps/buttons/button1';
import Bad_Lung from '../../comps/EffectDescription/bad_lung.png';
import '../../comps/EffectDescription/dsct.css';
import Link from 'next/link';
import Router from 'next/router';

const lungText =[
    {
        text:"Your lungs can be very badly affected by smoking. Coughs, colds, wheezing and asthma are just the start.",
        imglung:''
    },
    {
        text:"Smoking puts you at a significantly higher risk of developing lung cancer.",
        imglung:''
    },
    {
        text:"",
        imglung:require("../../comps/EffectDescription/lung.png")
    },
]


const EffectDescription = ({}) => {

    const [ind, setInfo] = useState(0);

    return<div className="dsct">
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

            <div className="effect_head"><Header /></div>
        
        <div id="sub"><div>Lung </div></div>
            <div className="bodycontents">
            <div className="des_img1"> <img src={Bad_Lung} /></div>
            <div className="dsct_inner"> 
                <div className="des_img"> 
                    {
                        (lungText[ind].imglung !== "") ? <img src = {lungText[ind].imglung} /> : null
                    }
                </div>
                <div className="about_info_effect">{lungText[ind].text}</div>
            </div>

            <div className="effect_footer_button">
                <Link href="/Lung"><a><BasicButton text="Back" bgcolor="#588B8B"/></a></Link>
                <BasicButton text="Next" bgcolor="#F28F3C" onClick={()=>{
                    if(ind >= 2){
                        Router.push("/EffectSelect");
                    }
                    else{setInfo(ind+1);}

                }}/>
            </div>
            


            </div>
        </div>
}



export default EffectDescription;