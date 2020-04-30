import {useState} from 'react';
import Header from '../../comps/Header'
import BasicButton from '../../comps/buttons/button1';
import Bad_Heart from '../../comps/EffectDescription/bad_heart.png';
import '../../comps/EffectDescription/dsct.css';
import Link from 'next/link';



const EffectDescription = ({img}) => {
    const [heart_info, changeInfo] = useState("Smoking damages your heart and your blood circulation, increasing the risk of conditions such as coronary heart disease, heart attack, stroke.")
    
    
    
    
    
    
    
    return  <div className="dsct">
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

                <div className="effect_head"><Header /></div>
            
            <div id="sub"><div>Heart </div></div>
                <div className="bodycontents">
                <div className="des_img1"> <img src={Bad_Heart} /></div>
                <div className="dsct_inner">
                    <div className="about_info_effect">{heart_info}</div>
                    <div className="des_img"> <img src={img} /></div>
                    
                </div>

                <div className="effect_footer_button">
                    <Link href="/Heart"><a><BasicButton text="Back" bgcolor="#588B8B"/></a></Link>
                    <BasicButton text="Next" bgcolor="#F28F3C" onClick={()=>{
                        changeInfo("Both people who smoke and those who are regularly exposed to secondhand smoke are at higher risk for heart attacks.");
                    }}/>
                </div>



                </div>
            </div>
}


export default EffectDescription;