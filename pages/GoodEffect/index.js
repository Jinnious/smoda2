import React from 'react';
import './ge.css';

import { Button1 } from '../../stories/Button.stories';
import Header from '../../comps/Header';
import cigarret from '../../img/smoking.png';





const GoodEffectPage= ({geimg,cigarret,text,arrow}) => <div className="gepage">

<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>


<div className="head"> <Header /></div>
<div className="bodycontents">

    <div className="subhead_organ">{text}</div>
   
    <div id="org">
    <img src={geimg}/>
    </div>


    <div id="ciga">
        {/* <img src={arrow}></img> */}
    <p>Drag me!</p>
    <img src={cigarret}/>
    </div>




</div>


<div className="footbutton"><Button1 /></div>


</div>

GoodEffectPage.defaultProps = {

    cigarret:cigarret,
    text: "organ",
    // arrow:arrow
 
}





export default GoodEffectPage;