import React from 'react';
import './ingred.css';
import SubHeader from '../../subheader';
import SmokCiga from '../ciga';
import Header from '../../Header';
import Link from 'next/link';

import BasicButton from '../../buttons/button1';



const SmokIngred = () => <div className="smoking">
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

</div>;


export default SmokIngred;

function ShowName(){
    document.querySelector(".benzene").style.display = "block";
    document.querySelector(".butane").style.display = "block";
    document.querySelector(".tar").style.display = "block";
    document.querySelector(".annmo").style.display = "block";
    document.querySelector(".nico").style.display = "block";
}