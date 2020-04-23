import React from 'react';
import BasicButton from '../comps/buttons/button1';
import StartButton from '../comps/buttons/button2';
import OptionButton from '../comps/buttons/button3';


export default {
    title: "Default Button",
    component: BasicButton
};

export const DefaultButton1 = () => <BasicButton />;

export const Button1 = () => <div>
    <BasicButton text="Next" />
    <BasicButton text="Back" bgcolor="rgb(105,138,137)"/>
</div>




export const DefaultButton2 = () => <StartButton />;
export const Buttons2 = () => <div>
    <div>
    <StartButton text="Start" bgcolor="#c8553D" />
    </div>
    <div>
    <StartButton text="Basic" bgcolor="#F28F3c" /> 
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


export const DefaultButton3 = () => <OptionButton />;
export const Buttons3 = () => <div>
<div>
<OptionButton text="Smoking" bgcolor="#c8553D" />
</div>
</div>