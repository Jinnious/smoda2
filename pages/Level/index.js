import React from 'react';
import BasicButton from '../../comps/buttons/button2';
import AdvancedButton from '../../comps/buttons/button2';
import SubHeader from '../../comps/subheader';
import './level.css';




const defaultLogo = require('../../comps/logo/logo.png');

const LevelPage = ({Logo,GradeText,GradeText2}) => <div id="levelpage">
    
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="levelpage_inner">

    <img src={Logo} />

    <div className="levelpage_inner_option">
    <BasicButton text="Basic" bgcolor="#F28F3c" /> 
   <div className="gradetext">{GradeText}</div> 

    <AdvancedButton  text="Advanced" bgcolor="#707070" />
    <div className="gradetext">{GradeText2}</div> 

   
    </div>
    </div>

    <SubHeader text="Tutorial" color="#588B8B" fontSize={20}/>

    
</div>







LevelPage.defaultProps = {
  
    Logo:defaultLogo,
    GradeText:"Grade 2-4",
    GradeText2:"Grade 5-7"

   
}




export default LevelPage;