
import React from 'react';
import './button4.css';


const LanguageButton = ({text,bgcolor}) => <div
className="languagebutton"
style={{backgroundColor:bgcolor}}>

<div class="languagebutton_inner">
    {text}
</div>

</div>;


LanguageButton.defaultProps = {
    
    text:"Korean",
    bgcolor: "#707070"

}

export default LanguageButton;
