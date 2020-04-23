import React from 'react';
import './ingred.css';
import SubHeader from '../../subheader';
import BasicButton from '../../buttons/button1';
import SmokCiga from '../ciga';


const SmokIngred = () => <div className="smoking">
    <div><SubHeader text="Ingredients" color="#C8553D"/></div>
    <div className="ciga_title">What is in a cigarette?</div>
    <div><SmokCiga /></div>
    <div>
        <BasicButton text="Back" bgcolor="rgb(105,138,137)" />
        <BasicButton text="Next" bgcolor="rgb(242,143,60)" />
    </div>
</div>;


export default SmokIngred;