import React from 'react';
import StartButton from '../../comps/buttons/button2';
import Header from '../../comps/Header';
import Stack from '../../comps/Stack';
import './navigation.css';

const Plus = require('./plus.png');
const NavigationPage = ({img1,img2,text1,text2}) => <div id="optionpage">
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

<Header/>

<div className="nav_bgcolor">
<div className="first"> <img src={img1} />
<div className="navtext1" id="basicnav">{text1}</div>
</div>

<div className="second">
<div className=""> <img src={img2} /></div>
<div className="navtext1" id="advancednav">{text2}</div>
</div>
</div>

</div>

NavigationPage.defaultProps = {
img1:Plus,
img2:Plus,
text1:"Basic",
text2:"Advanced"
}



export default NavigationPage;