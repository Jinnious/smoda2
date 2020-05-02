import React from 'react';

import Header from '../../comps/Header';
import Stack from '../../comps/Stack';
import './navigation.css';

import Link from 'next/link';
import Router from 'next/router';

const Plus = require('./plus.png');
const NavigationPage = ({img1,img2,text1,text2,text3,text4}) => <div id="optionpage">

<Header/>

<div className="nav_bgcolor">

<div className="basic_nav"> <div>{text1}</div>
<div className="plus"> <img src={img1} /></div>
</div>

<Link href="/navigationopen">
<div className="advanced_nav"> 
<div>{text2}</div>
<div className="plus_1">< img src={img2} /></div>
</div>
</Link>

<Link href="/About">
<div className="advanced_nav"> <div>{text3}</div>
</div>
</Link>

{/* <Link href="/Tutorial"> */}
<div className="tutorial_nav"> <div>{text4}</div>
</div>
{/* </Link> */}



</div>

</div>



NavigationPage.defaultProps = {
img1:Plus,
img2:Plus,
text1:"Basic",
text2:"Advanced",
text3:"About Us",
text4:"Tutorial"
}



export default NavigationPage;

{/* <div className="nav_bgcolor">
<div className="first"> 
<img src={img1} />
<div className="navtext1" id="basicnav">{text1}</div>
</div>

<div className="second">
<div className=""> <img src={img2} /></div>
<div className="navtext1" id="advancednav">{text2}</div>
</div>
</div>

</div> */}