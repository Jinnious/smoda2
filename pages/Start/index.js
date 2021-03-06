import React from 'react';
import StartButton from '../../comps/buttons/button2';
import Link from 'next/link';



import './start.css';

import '../app.css';


const defaultLogo = require('../../comps/logo/logo.png');
const defaultIcon = require('../../comps/icons/settings.png');





const StartPage = ({Logo,Icon,Aboutus}) => <div id="startpage">
 <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>


<a>
<img src={Icon} id="settingicon"/> 
</a>




<div className="startpage_inner">
        <img src={Logo} />
<div className="starbutton">
<Link href="/Level"><a>
< StartButton text="Start" />
</a>
</Link>
    </div>

<Link href ="/About">
<div id="aboutus">{Aboutus}</div>
</Link>


</div>  

</div>;



StartPage.defaultProps = {
    Aboutus:"About us",
    Logo:defaultLogo,
    Icon:defaultIcon
}




export default StartPage;


