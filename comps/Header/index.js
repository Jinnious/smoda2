
import React from 'react';
import Router from 'next/router';
import './header.css';
import Link from 'next/link';

import BasicButton from '../buttons/button1';

// const defaultImg = require('./Logo.png');
// const hamburg1 = require('./hamburger.png');
// const plusicon = require('./plus.png');



const Header = ({}) => <div className="header">

      
    <div id="circle">
    <div className="logo"><img src={img} />
    </div>

         
    <div className="dropdown">
  <button onclick="myFunction()" className="dropbtn">Dropdown</button>
  <div id="myDropdown" className="dropdown-content">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</div>



         </div>


   </div>


export default Header;





function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }