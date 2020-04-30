import React from 'react';
import BasicButton from '../../comps/buttons/button2';
import AdvancedButton from '../../comps/buttons/button2';

import './level.css';
import Link from 'next/link';





const defaultLogo = require('../../comps/logo/logo.png');

const LevelPage = ({Logo,GradeText,GradeText2,Aboutus}) => <div id="levelpage">
    
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="levelpage_inner">

    <img src={Logo} />

    <div className="levelpage_inner_option">
    <Link href='/Ciga'>
    <a>
    <BasicButton text="Basic" bgcolor="#F28F3c" /> 
    </a>
    </Link>
   <div className="gradetext">{GradeText}</div> 


    <AdvancedButton  text="Advanced" bgcolor="#707070" />
    <div className="gradetext">{GradeText2}</div> 

    </div>
    </div>

    <div id="aboutus">{Aboutus}</div>

    
</div>







LevelPage.defaultProps = {
    Aboutus:"Tutorial",
    Logo:defaultLogo,
    GradeText:"Grade 2-4",
    GradeText2:"Grade 5-7"

   
}




export default LevelPage;