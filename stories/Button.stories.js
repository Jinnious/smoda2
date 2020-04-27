import React from 'react';
import BasicButton from '../comps/buttons/button1';
import StartButton from '../comps/buttons/button2';
import OptionButton from '../comps/buttons/button3';
import drk from '../comps/buttons/button3/beer.png';
import LanguageButton from '../comps/buttons/button4';



export default {
    title: "Default Button",
    component: BasicButton
};

export const DefaultButton1 = () => <BasicButton 
text="Back" bgcolor="rgb(105,138,137)"/>;

export const GoHome = () => <BasicButton 
text="Go home" />;

export const Button1 = () => <div>
    <BasicButton text="Next" />
    <BasicButton text="Back" bgcolor="rgb(105,138,137)"/>
</div>




export const DefaultButton2 = () => <StartButton />;
export const Buttons2 = () => <div>
    <div>
    <StartButton text="Start" bgcolor="#c8553D" onMouseOver={MouseOver} onMouseOut={MouseOut}/>
    </div>
    <div>
    <StartButton text="Basic" bgcolor="#F28F3c" onMouseOver={MouseOverYellow} onMouseOut={MouseOutYellow} /> 
    </div>
    <div>
    <StartButton text="Advanced" bgcolor="#707070" />
    </div>
    <div>
    <StartButton text="Ingredients" bgcolor="#C8553D" />
    </div>
    <div>
    <StartButton text="Side-Effects" bgcolor="#588B8B" />
    </div>
</div>

function MouseOver(){
    document.querySelector(".startbutton_box").style.backgroundColor = "white";
    document.querySelector(".startbutton_box").style.border = "2px solid #c8553D";
    document.querySelector(".startbutton_box").style.color = "#c8553D";
}
function MouseOut(){
    document.querySelector(".startbutton_box").style.backgroundColor = "#c8553D";
    document.querySelector(".startbutton_box").style.border = "none";
    document.querySelector(".startbutton_box").style.color = "white";
}


function MouseOverYellow(){
    document.querySelector(".startbutton_box").style.backgroundColor = "white";
    document.querySelector(".startbutton_box").style.border = "2px solid #F28F3c";
    document.querySelector(".startbutton_box").style.color = "#F28F3c";
}
function MouseOutYellow(){
    document.querySelector(".startbutton_box").style.backgroundColor = "#c8553D";
    document.querySelector(".startbutton_box").style.border = "none";
    document.querySelector(".startbutton_box").style.color = "white";
}


export const DefaultButton3 = () => <OptionButton />;

export const Buttons3 = () => <div>
<div>
<OptionButton text="Smoking" bgcolor="#c8553D" />
</div>

<div>
<OptionButton text="Drinking" bgcolor="#588B8B" img={drk} />
</div>
</div>



export const DefaultButton4 = () => <LanguageButton />;

export const Buttons4 = () => <div>
<div>
<LanguageButton  />
</div>
<div>
<LanguageButton text="Japanese"  />
</div>
<div>
<LanguageButton text="Chinese"  />
</div>
</div>


