import React from 'react';
import StartButton from '../../comps/buttons/button2';
import Header from '../../comps/Header';
import Stack from '../../comps/Stack';
import './navigation.css';

const Plus = require('./plus.png');
const NavigationPage = ({img1,img2}) => <div id="optionpage">

<Header/>

<Stack/>
<div className="first"> <img src={img1} /></div>

<div className="second">
<Stack/>
<div className=""> <img src={img2} /></div>

</div>

</div>

NavigationPage.defaultProps = {
img1:Plus,
img2:Plus
}



export default NavigationPage;