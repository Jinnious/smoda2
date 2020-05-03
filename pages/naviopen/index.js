
import React from 'react';
import './naviopen.css';
import Link from 'next/link';
import BasicButton from '../buttons/button1';

const defaultImg = require('./logo.svg');
const hamburg1 = require('./hamburger.png');
const plusicon = require('./plus.png');



const Header = ({img,hamburg1,text1,text2,text3,text4,plusicon,text5,text6}) => <div className="header">

        <div className="header_box">
{/* 
        <div className="header_circle">
        <div className="header_img"> 
         <img src={img} /> */}

       
       
        <div className="hambur" onClick={() =>{
            Shownav();
        }}><img src={hamburg1} /></div>


        <div className="navigation_open">

            <div className="nav_basic">
                {text1}
                <img src={plusicon}/>
            </div>

         
            
            <div className="nav_advan"
            // onClick ={() => {
            //     Showsub(); }}
            >
               {text2}

                <div className="nav_inside_nav">

                    {text5}
                    <p></p>
                    {text6}
                   
                    </div>

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
    text1:"Basic",
    text2:"Advanced",
    text3:"About Us",
    text4:"Tutorial",
    text5:"Smoking",
    text6:"Drinking"

}


export default Header;




var menu_state = false;

function Shownav() {

    if(menu_state === false) {
        MeunOpen();
    } else {
        MenuClose();
    }
    }

function MeunOpen() {
    
    document.querySelector(".navigation").style.right = "0%";
    menu_state = true;
    
}

function MenuClose() {

    document.querySelector(".navigation").style.right = "-100%";
    menu_state = false;
}