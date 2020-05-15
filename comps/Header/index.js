import React from 'react';
import Router from 'next/router';
import './header.css';
import Link from 'next/link';

import BasicButton from '../buttons/button1';

import menuicon from "../../img/menu.png";
import plusicon from "../../img/plus.png";

const defaultImg = require('./Logo.png');


var menu_state = false;
var submenu_state = false;
var submenu2_state = false;

const Header = ({img}) => 
    <div className="header">
        <div className="whitebox">
            <div id="circle">
                <div className="logo"><Link href="/Level"><a><img src={img} /></a></Link></div>
            </div>
            <img src={menuicon} className="menu_icon" onClick={MenuToggle}/>
            <div className="menu">

                <section>
                    <p onClick={SubToggle}>Basic <img src={plusicon} className="plus_icon"/></p>
                    <div className="submenu">
                    <div>
                        Smoking
                    </div>
                    <div>
                        Drinking 
                    </div>
                    </div>
                </section> 



                <section>
                    <p onClick={SubToggle2}>Advanced <img src={plusicon} className="plus_icon"/></p>
                    <div className="submenu2">
                    <div>
                        smoking
                    </div>
                    <div>
                        Drinking
                    </div>
                    </div>
                </section>

                <section>
                    <Link href="/About"><a><div>About Us</div></a></Link>
                </section>

                <section>
                    <Link href="/Tutorial"><a><div>Tutorial</div></a></Link>
                </section>       

            </div>
        </div>
    </div>

function MenuOpen() {
    document.querySelector(".menu").style.display = "block";
    
    setTimeout(function(){
        document.querySelector(".menu").style.opacity = 1;
    }, 300);

    menu_state = true;
}
function MenuClose() {
    setTimeout(function(){
        document.querySelector(".menu").style.display = "none";
    }, 300);

    document.querySelector(".menu").style.opacity = "0";
    menu_state = false;
}

function MenuToggle(){
    console.log("menu state before if/else", menu_state);
    if(menu_state === false){
        MenuOpen();
    } else {
        MenuClose();
    }
    console.log("menu state after if/else", menu_state);
}




function SubOpen(){
    document.querySelector(".submenu").style.display = "block";
    setTimeout(function(){
        document.querySelector(".submenu").style.opacity = 1;
    }, 300);
    submenu_state = true;
}

function SubClose() {
    setTimeout(function(){
        document.querySelector(".submenu").style.display = "none";
    }, 300);

    document.querySelector(".submenu").style.opacity = "0";
    submenu_state = false;
}

function SubToggle(){
    console.log("menu state before if/else", submenu_state);
    if(submenu_state === false){
        SubOpen();
    } else {
        SubClose();
    }
    console.log("menu state after if/else", submenu_state);
}

function SubOpen2(){
    document.querySelector(".submenu2").style.display = "block";
    setTimeout(function(){
        document.querySelector(".submenu2").style.opacity = 1;
    }, 300);
    submenu2_state = true;
}

function SubClose2() {
    setTimeout(function(){
        document.querySelector(".submenu2").style.display = "none";
    }, 300);

    document.querySelector(".submenu2").style.opacity = "0";
    submenu2_state = false;
}

function SubToggle2(){
    console.log("menu state before if/else", submenu2_state);
    if(submenu2_state === false){
        SubOpen2();
    } else {
        SubClose2();
    }
    console.log("menu state after if/else", submenu2_state);
}





Header.defaultProps = {
    img:defaultImg
    

}


export default Header;






