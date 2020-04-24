
import React from 'react';
import './button4.css';


const LanguageButton = ({text,bgcolor}) => <div
className="languagebutton"
style={{backgroundColor:bgcolor}}>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
<div class="languagebutton_inner">
    {text}
</div>

</div>;


LanguageButton.defaultProps = {
    
    text:"Korean",
    bgcolor: "#707070"

}

export default LanguageButton;
