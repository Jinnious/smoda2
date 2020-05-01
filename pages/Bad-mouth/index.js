import {useEffect, useState} from 'react';
import Header from '../../comps/Header'
import BasicButton from '../../comps/buttons/button1';
import Bad_Mouth from '../../comps/EffectDescription/bad_mouth.png';
import '../../comps/EffectDescription/dsct.css';
import Link from 'next/link';
import Router from 'next/router';

const mouthText =[
    {
        text:"Yellowish or brownish stains on the teeth are telltale signs of long-term smoking. It also causes a bad breath.",
        imgmouth:''
    },
    {
        text:"Your sense of smell and taste can be dulled by smoking, which can decrease your appetite.",
        imgmouth:''
    },
    {
        text:"",
        imgmouth:require("../../comps/EffectDescription/teeth.png")
    },
]


const EffectDescription = ({}) => {

    const [ind, setInfo] = useState(0);
   
    return <div className="dsct">
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

                <div className="effect_head"><Header /></div>
            
                <div id="sub"><div>Mouth </div></div>
                    <div className="bodycontents">
                    <div className="des_img1"> <img src={Bad_Mouth} /></div>
                    <div className="dsct_inner">
                        <div className="about_info_effect">{mouthText[ind].text}</div>
                        <div className="des_img">
                            {
                                (mouthText[ind].imgmouth !== "") ? <img src = {mouthText[ind].imgmouth} /> : null
                            }
                        </div>
                        
                    </div>

                    <div className="effect_footer_button">
                        <BasicButton text="Back" bgcolor="#588B8B" onClick={()=>{
                            if(ind<=0){
                                Router.push("/Mouth");
                            }
                            else{
                                setInfo(ind-1);
                            }
                        }}/>
                        <BasicButton text="Next" bgcolor="#F28F3C" onClick={()=>{
                            if(ind>=2){
                                Router.push("/EffectSelect");
                            }
                            else{
                                setInfo(ind+1);
                            }
                        }}/>
                    </div>



                </div>
            </div>
}



export default EffectDescription;