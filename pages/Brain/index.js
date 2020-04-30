import React from 'react';
import '../GoodEffect/ge.css';

import BasicButton from '../../comps/buttons/button1';
import Header from '../../comps/Header';
import cigarret from '../../img/smoking.png';
import arrow3 from '../GoodEffect/arrow3.gif';
import Link from 'next/link';

import brainImg from '../../img/good_brain.png';


const GoodEffectPage= ({cigarret,memory}) => <div className="gepage">

<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>


<div className="head"> <Header /></div>
<div className="bodycontents">

    <div className="subhead_organ">Brain</div>
   
    <div id="org">
    <img src={brainImg}/>
    </div>


    <div id="ciga">
      <div id="gif"><img src={arrow3}></img></div>  
    <p>Drag me!</p>
    
    <img src={cigarret}/>
    </div>




</div>


<div className="footbutton">
    <Link href="/EffectSelect"><a><BasicButton text="Back" bgcolor="#588B8B"/> </a></Link>  
  <Link href="/Bad-brain"><a><BasicButton text="Next" bgcolor="#F28F3C"/> </a></Link>
</div>


</div>

GoodEffectPage.defaultProps = {

    cigarret:cigarret,
    arrow3:arrow3,
    memory:"M=memory"
 
}





export default GoodEffectPage;