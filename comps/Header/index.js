
import React from 'react';
import './header.css';
import Link from 'next/link';
import BasicButton from '../buttons/button1';

const defaultImg = require('./logo.svg');
const hamburg1 = require('./hamburger.png');
const plusicon = require('./plus.png');


const Header = ({img,hamburg1,text1,text2,text3,text4,plusicon}) => <div className="header">

        <div className="header_box">
{/* 
        <div className="header_circle">
        <div className="header_img"> 
         <img src={img} /> */}

       
       
        <div className="hambur" onClick={() =>{
            Shownav();
        }}><img src={hamburg1} /></div>


        <div className="navigation">

            <div className="nav_basic">
                {text1}
                <img src={plusicon}/>
            </div>

            <div className="nav_advan">
                {text2}
                <img src={plusicon}/>
            </div>

            <div className="nav_about">
                {text3}
            </div>

            <div className="nav_tut">
                {text4}
            </div>


        </div>
    

  
    </div>
    
    </div>
    
    // </div>
  
// </div>

Header.defaultProps = {
    img:defaultImg,
    hamburg1:hamburg1,
    plusicon:plusicon,
    text1: "Basic",
    text2:"Advanced",
    text3:"About Us",
    text4:"Tutorial"

}


export default Header;

function Shownav() {
    document.querySelector(".navigation").style.right = 0;
}