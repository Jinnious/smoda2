import React from 'react';
import './ciga.css';
import SubHeader from '../../comps/subheader';
import SmokCiga from '../../comps/ingredients/ciga';
import Header from '../../comps/Header';

import { Button1 } from '../../stories/Button.stories';


const SmokIngred = () => <div className="smoking">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>



    <Header/>

    <SubHeader text="Ingredients" color="#C8553D"/>
    <div className="ciga_title">What is in a cigarette?</div>
    <div className="cigaImg"><SmokCiga /></div>


    <div className="footerbutton_ingred"><Button1 /></div>
</div>;


export default SmokIngred;