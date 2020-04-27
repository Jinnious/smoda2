import React from 'react';
import './ingred.css';
import SubHeader from '../../subheader';
import SmokCiga from '../ciga';
import Header from '../../Header';


const SmokIngred = () => <div className="smoking">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>



    <Header/>

    <SubHeader text="Ingredients" color="#C8553D"/>
    <div className="ciga_title">What is in a cigarette?</div>
    <div className="cigaImg"><SmokCiga /></div>
</div>;


export default SmokIngred;