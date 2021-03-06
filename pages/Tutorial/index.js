import React from 'react';
import './tt.css';

import Link from 'next/link';

const defaultIcon = require('./xicon.png');



const TutorialPage = ({name2,Icon1,text2}) => <div id="tutorialpage">
 <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

<Link href="/Start"><div><img src={Icon1} id="xicon"/> </div></Link>

<div id="name"> {name2}</div>

<div id="text">
{text2}
</div>



</div>;


TutorialPage.defaultProps = {
 
    name2:"Tutorial",
    Icon1:defaultIcon,
text2:"There are two of levels which are basic and advanced. The basic level is for grade 2-4 that compose with easy an explanation and illustration. The Advanced level is for grade 5-7 that compose with realistic images with more detailed explanations require a higher level of understanding than basic level.Each topics will show three sections: Ingredients, Effects, Quiz.After choosing the level,we have two topics smoking and drinking.  You can choose a topic to educate your children according to the situation."
}

export default TutorialPage;