import React from 'react';
import '../GoodEffect/ge.css';
import Router from 'next/router';
import BasicButton from '../../comps/buttons/button1';
import Header from '../../comps/Header';
import cigarret from '../../img/smoking.png';
import arrow3 from '../GoodEffect/arrow3.gif';
import Link from 'next/link';

import lungImg from '../../img/good_lung.png';


const GoodEffectPage= ({cigarret,memory}) => <div className="gepage">

<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>


<div className="head"> <Header /></div>
<div className="bodycontents">

    <div className="subhead_organ">Lung</div>
   
    <div id="org">
    <img src={lungImg}/>
    </div>


    <div id="ciga">
      <div id="gif"><img src={arrow3}></img></div>  
    <p>Click the cigarret!</p>
    
    <img src={cigarret} onClick={()=>{
      Router.push("/Bad-lung");
    }}/>
    </div>




</div>


<div className="footbutton">
    <Link href="/EffectSelect"><a><BasicButton text="Back" bgcolor="#588B8B"/> </a></Link>  
  <Link href="/Bad-lung"><a><BasicButton text="Next" bgcolor="#F28F3C"/> </a></Link>
</div>


</div>

GoodEffectPage.defaultProps = {

    cigarret:cigarret,
    arrow3:arrow3,
    memory:"M=memory"
 
}





export default GoodEffectPage;