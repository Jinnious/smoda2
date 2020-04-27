import React from 'react';
import './ge.css';

import { Button1 } from '../../stories/Button.stories';
import Header from '../../comps/Header';
import cigarret from '../../img/smoking.png';




const GoodEffectPage= ({geimg,cigarret}) => <div className="gepage">

<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>


<Header />
<div className="bodycontents">
   
   
   
    <div id="org">
    <img src={geimg}/>
    </div>

    <div id="ciga">
    <p>Drag me!</p>
    <img src={cigarret}/>
    </div>




</div>


<Button1 />


</div>

GoodEffectPage.defaultProps = {

    cigarret:cigarret
 
}





export default GoodEffectPage;