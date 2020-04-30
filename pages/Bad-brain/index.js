import {useState, useEffect} from 'react';
import Header from '../../comps/Header'
import BasicButton from '../../comps/buttons/button1';
import Bad_Brain from '../../comps/EffectDescription/bad_brain.png';
import '../../comps/EffectDescription/dsct.css';
import Link from 'next/link';



const EffectDescription = ({img}) =>{ 
    const [brain_info, changeInfo] = useState("* M means Memory *  Smoking causes loss of memory, loss of brain volume. You will also lose control over emotions.")


      return<div className="dsct">
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

                <div className="effect_head"><Header /></div>
            
                <div id="sub">Brain</div>
                    <div className="bodycontents">
                    <div className="des_img1"> <img src={Bad_Brain} /></div>
                <div className="dsct_inner">
                    <div className="about_info_effect">{brain_info}</div>
                    <div className="des_img"> <img src={img} /></div>
                    
                </div>

                <div className="effect_footer_button">
                    <Link href="/Brain"><a><BasicButton text="Back" bgcolor="#588B8B"/></a></Link>
                    <BasicButton text="Next" bgcolor="#F28F3C" onClick={()=>{
                        changeInfo("Increases risk of having a stroke by at least 50%, which can cause brain damage and death.");
                    }}/>
                </div>



                </div>
            </div>
}    



export default EffectDescription;