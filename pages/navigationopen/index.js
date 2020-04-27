import React from 'react';
import StartButton from '../../comps/buttons/button2';
import Header from '../../comps/Header';
import Stack from '../../comps/Stack';
import './naviopen.css';

const Plus = require('./plus.png');
const NavigationOpenPage = ({img1,img2,text1,text2}) => <div id="optionpage">
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
<Header/>

<Stack/>
<div className="first"> <img src={img1} /></div>

<div className="second">
<Stack/>
<div className=""> <img src={img2} /></div>

</div>
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
}



export default NavigationOpenPage;