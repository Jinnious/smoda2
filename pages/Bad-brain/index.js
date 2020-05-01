import {useState, useEffect} from 'react';
import Header from '../../comps/Header'
import BasicButton from '../../comps/buttons/button1';
import Bad_Brain from '../../comps/EffectDescription/bad_brain.png';
import '../../comps/EffectDescription/dsct.css';
import Link from 'next/link';
import Router from 'next/router';

const brainText = [
    {
        text:"* M means Memory *  Smoking causes loss of memory, loss of brain volume. You will also lose control over emotions.",
        imgbrain:''
    },
    {
        text:"Increases risk of having a stroke by at least 50%, which can cause brain damage and death.",
        imgbrain:''
    },
    {
        text:"",
        imgbrain:require("../../comps/EffectDescription/brain.png")
    },
]

const EffectDescription = ({}) =>{ 
    

    const [ind, setInfo] = useState(0);

      return<div className="dsct">
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

                <div className="effect_head"><Header /></div>
            
                <div id="sub">Brain</div>
                    <div className="bodycontents">
                    <div className="des_img1"> <img src={Bad_Brain} /></div>
                <div className="dsct_inner">
                    <div className="about_info_effect">{brainText[ind].text}</div>
                    <div className="des_img"> {
                        (brainText[ind].imgbrain !== "") ? <img src = {brainText[ind].imgbrain} /> : null
                    }</div>
                    
                </div>

                <div className="effect_footer_button">
                    <BasicButton text="Back" bgcolor="#588B8B" onClick={()=>{
                        if(ind<=0){
                            Router.push("/Brain");
                        }
                        else{
                            setInfo(ind-1);
                        }
                    }}/>
                    <BasicButton text="Next" bgcolor="#F28F3C" onClick={()=>{
                        if(ind>=2){
                            Router.push("/EffectSelect");
                        }
                        else{setInfo(ind+1);}
                    }}/>
                </div>



                </div>
            </div>
}    



export default EffectDescription;