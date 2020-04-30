import {useEffect, useState} from 'react';
import Header from '../../comps/Header'
import BasicButton from '../../comps/buttons/button1';
import Bad_Mouth from '../../comps/EffectDescription/bad_mouth.png';
import '../../comps/EffectDescription/dsct.css';
import Link from 'next/link';





const EffectDescription = ({img}) => {
    const [brain_info, changeInfo] = useState("Yellowish or brownish stains on the teeth are telltale signs of long-term smoking. It also causes a bad breath.")



    return <div className="dsct">
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

                <div className="effect_head"><Header /></div>
            
                <div id="sub"><div>Mouth </div></div>
                    <div className="bodycontents">
                    <div className="des_img1"> <img src={Bad_Mouth} /></div>
                    <div className="dsct_inner">
                        <div className="about_info_effect">{brain_info}</div>
                        <div className="des_img"> <img src={img} /></div>
                        
                    </div>

                    <div className="effect_footer_button">
                        <Link href="/Mouth"><a><BasicButton text="Back" bgcolor="#588B8B"/></a></Link>
                        <BasicButton text="Next" bgcolor="#F28F3C" onClick={()=>{
                            changeInfo("Your sense of smell and taste can be dulled by smoking, which can decrease your appetite.");
                        }}/>
                    </div>



                </div>
            </div>
}



export default EffectDescription;