import {useState} from 'react';
import Header from '../../comps/Header'
import BasicButton from '../../comps/buttons/button1';
import Bad_Heart from '../../comps/EffectDescription/bad_heart.png';
import '../../comps/EffectDescription/dsct.css';
import Link from 'next/link';
import Router from 'next/router';

const heartText =[
    {
        text:"Smoking damages your heart and your blood circulation, increasing the risk of conditions such as coronary heart disease, heart attack, stroke.",
        imgheart:''
    },
    {
        text:"Both people who smoke and those who are regularly exposed to secondhand smoke are at higher risk for heart attacks.",
        imgheart:''
    },
    {
        text:"",
        imgheart:require("../../comps/EffectDescription/heart.png")
    },
]

const EffectDescription = ({}) => {
    
    
    const [ind, setInfo] = useState(0);
    
    return  <div className="dsct">
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

                <div className="effect_head"><Header /></div>
            
            <div id="sub"><div>Heart </div></div>
                <div className="bodycontents">
                <div className="des_img1"> <img src={Bad_Heart} /></div>
                <div className="dsct_inner">
                    <div className="about_info_effect">{heartText[ind].text}</div>
                    <div className="des_img"> {
                        (heartText[ind].imglung !== "") ? <img src = {heartText[ind].imgheart} /> : null
                    }</div>
                    
                </div>

                <div className="effect_footer_button">
                    <BasicButton text="Back" bgcolor="#588B8B" onClick={()=>{
                        if(ind<=0){
                            Router.push("/Heart");
                        }
                        else{setInfo(ind-1);}
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