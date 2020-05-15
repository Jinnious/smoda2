
import React from 'react';
import ReactDom from "react-dom";
import './header.css';
import Link from 'next/link';
import './menu.js';
import BasicButton from '../buttons/button1';

const defaultImg = require('./Logo.png');
const hamburg1 = require('./hamburger.png');
const plusicon = require('./plus.png');



const Header = ({img,hamburg1,text1,text2,text3,text4,plusicon,text5,text6}) => <div className="header">

      
    <div id="circle">
    <div className="logo"><img src={img} /></div>
         
         <div>

       
       
        <div className="hambur" onClick={() =>{
            Shownav();
        }}><img src={hamburg1} /></div>




}



        <div className="navigation">


            <div className="nav_basic" 
            onClick = {() => {IsOpen();}} >
                {text1}

                <div className="drsm1">

                            {text5}
                            <p></p>
                            {text6}
                            </div> 

                <img src={plusicon}/>
            </div>

         
            
            <div className="nav_advan"
        
            onClick={()=> {Showsub();}}
            >
               {text2}

                     <div className="drsm2">

                    {text5}
                    <p></p>
                    {text6}
                   
                    </div> 

                <img src={plusicon}/>
            </div>
        

            <Link href="Aboutus">
            <div className="nav_about">
                {text3}
            </div>
            </Link>

          

                <Link href="Tutorial">
                <div className="nav_tut">
                {text4}
            </div>
                </Link>



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

    document.querySelector(".navigation").style.right = "-130%";
    menu_state = false;
}


var open_state = false;

function IsOpen() {

    if(open_state === fals) {
        SubOpen();
    } else {
        SubClose();
    }
    }

function SubOpen() {
    
    document.querySelector(".drsm1").display = "none";
    open_state = true;
    
}

function SubClose() {

    document.querySelector(".drsm1").display = "inline-block";
    open_state = false;
}






var open_state1 = false;

function IsOpen1() {

    if(open_state1 === fals) {
        SubOpen1();
    } else {
        SubClose1();
    }
    }

function SubOpen1() {
    
    document.querySelector(".drsm2").display = "none";
    open_state1 = true;
    
}

function SubClose() {

    document.querySelector(".drsm2").display = "inline-block";
    open_state1 = false;
}



