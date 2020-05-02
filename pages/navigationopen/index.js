import React from 'react';

import Header from '../../comps/Header';
import './naviopen.css';


import Link from 'next/link';

const Plus = require('./plus.png');
const NavigationOpenPage = ({img1,img2,text1,text2,text3,text4,text5,text6}) => <div id="optionpage">
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

<Header/>

<div className="nav_bgcolor">
<div className="basic_nav"> <div>{text1}</div>
<div className="plus"> <img src={img1} /></div>
</div>


<div className="advanced_nav"> <div>{text2}</div>
<div className="plus_1">< img src={img2} /></div>
</div>



<div className="navbox">
    <div className="navtextcontainer">
        
        <Link href="/Ciga"><div className="navtext" id="firsttext">{text5}</div></Link>

<div className="navtext" id="secondtext">{text6}</div>
</div>
</div>



<div className="navsecondbox">
    <Link href="/About">
    <div className="advanced_nav"> <div>{text3}</div>
</div>
    </Link>

<Link href="/Tutorial"> 
<div className="tutorial_nav"> <div>{text4}</div>
</div></Link>


</div>
</div>

</div>







NavigationOpenPage.defaultProps = {
img1:Plus,
img2:Plus,
text1:"Basic",
text2:"Advanced",
text3:"About Us",
text4:"Tutorial",
text5:"Smoking",
text6:"Drinking"
}

export default NavigationOpenPage;


{/* <NavigationPage />





<div className="navbox">
    <div className="navtextcontainer">
<div className="navtext" id="firsttext">{text1}</div>
<div className="navtext" id="secondtext">{text2}</div>
</div>
</div>
</div>

NavigationOpenPage.defaultProps = {
img1:Plus,
img2:Plus,
text1:"Smoking",
text2:"Drinking"
} */}
