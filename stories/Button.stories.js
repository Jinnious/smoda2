import React from 'react';
import BasicButton from '../comps/buttons/button1';
import StartButton from '../comps/buttons/button2';


export default {
    title: "Default Button",
    component: BasicButton
};

export const MyBasicButton = () => <BasicButton />;

export const PageWithCustomButtons = () => <div>
    <BasicButton text="Next" />
    <BasicButton text="Back" bgcolor="rgb(105,138,137)"/>
</div>




export const MyStartButton = () => <StartButton />;
export const PageWithButtons = () => <div>
    <div>
    <StartButton text="Start" bgcolor="#c8553D" />
    </div>
    <div>
    <StartButton text="Basic" bgcolor="#F28F3c" /> 
    </div>
    <div>
    <StartButton text="Advanced" bgcolor="#707070" />
    </div>
</div>