import React from 'react';
import './about.css';
import { MyAboutPage } from '../../stories/Pages/About.stories';

import Link from 'next/link';

const defaultIcon = require('./xicon.png');



const AboutPage = ({name1,Icon,text}) => <div id="aboutpage">
 <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

<Link href="/Start"><div><img src={Icon} id="xicon"/> </div></Link>



<div id="name"> {name1}</div>

<div id="text">
{text}
</div>



</div>;



AboutPage.defaultProps = {
 
    name1:"About us",
    Icon:defaultIcon,
    text:
    "Welcome to smoda which is an educational application about teaching Smoking and Drinking awareness to Grade 2-7. Our app is specifically designed to target the Asian countries, as culturally they are aware of teaching awareness of smoking and drinking to younger children. Our final goal is to give children correct knowledge, so when they become adults they would make their own choices to smoke and drink."
}


export default AboutPage;