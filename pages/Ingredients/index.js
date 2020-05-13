import React from 'react';
import '../../comps/ingredients/ingred/ingred.css';
import SubHeader from '../../comps/subheader';
import SmokCiga from '../../comps/ingredients/ciga';
import Header from '../../comps/Header';
import Link from 'next/link';
import {stage, ChangeStage} from '../../data';

import BasicButton from '../../comps/buttons/button1';


const SmokIngred = () => {
    return<div className="smoking">
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>



            <Header/>

            <div className='subhead_ing'><SubHeader text="Ingredients" color="#C8553D"/></div>
            <div className="ciga_title">What is in a cigarette?</div>
            
            <div className="cigaImg"><SmokCiga /></div>

            


            <p id="click">Tap each dots!</p>
            <div className="footerbutton_ingred">
                <Link href="Option"><a><BasicButton text="Back" bgcolor="#588B8B"/></a></Link>
                <Link href="/Ingredients"><a><BasicButton text="Next" bgcolor="#F28F3C" onClick={()=>{
                    ShowName();
                }}/></a></Link>
            </div>
        </div>
}


export default SmokIngred;

function ShowName(){
    document.querySelector(".benzene").style.display = "block";
    document.querySelector(".butane").style.display = "block";
    document.querySelector(".tar").style.display = "block";
    document.querySelector(".annmo").style.display = "block";
    document.querySelector(".nico").style.display = "block";
}