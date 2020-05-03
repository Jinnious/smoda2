import React from 'react';
import './ge.css';

import BasicButton from '../../comps/buttons/button1';
import Header from '../../comps/Header';
import cigarret from '../../img/smoking.png';
import arrow3 from './arrow3.gif';
import Link from 'next/link';

import '../app.css';




const GoodEffectPage= ({geimg,cigarret,text,memory}) => <div className="gepage">

<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>


<div className="head"> <Header /></div>
<div className="bodycontents">

    <div className="subhead_organ">{text}</div>
   
    <div id="org">
    <img src={geimg}/>
    </div>


    <div id="ciga">
      <div id="gif"><img src={arrow3}></img></div>  
    <p>Drag me!</p>
    
    <img src={cigarret}/>
    </div>



</div>


<div className="footbutton">
  
  <BasicButton text="Back" bgcolor="#588B8B"/>
  <BasicButton text="Next" bgcolor="#F28F3C"/>
</div>


</div>

GoodEffectPage.defaultProps = {

    cigarret:cigarret,
    text: "organ",
    arrow3:arrow3,
    memory:"M=memory"
 
}





export default GoodEffectPage;