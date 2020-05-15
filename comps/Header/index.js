import React from 'react';
import Router from 'next/router';
import './header.css';
import Link from 'next/link';

import BasicButton from '../buttons/button1';

const defaultImg = require('./Logo.png');




const Header = ({img}) => <div className="header">

      
    <div id="circle">
    <div className="logo"><img src={img} /></div>
         
         </div>

     
        

         </div>

Header.defaultProps = {
    img:defaultImg
    

}


export default Header;






// var open_state = false;

// function IsOpen() {

//     if(open_state === false) {
//         SubOpen();
//     } else {
//         SubClose();
//     }
//     }

// function SubOpen() {
    
//     document.querySelector(".drsm1").display = "none";
//     open_state = true;
    
// }

// function SubClose() {

//     document.querySelector(".drsm1").display = "block";
//     open_state = false;
// }






// var open_state1 = false;

// function Showsub() {

//     if(open_state1 === false) {
//         SubOpen1();
//     } else {
//         SubClose1();
//     }
//     }

// function SubOpen1() {
    
//     document.querySelector(".drsm2").display = "none";
//     open_state1 = true;
    
// }

// function SubClose1() {

//     document.querySelector(".drsm2").display = "block";
//     open_state1 = false;
// }












// import React, {Component} from 'react';

// class Card extends Component {

//     constructor() 
//     {
//         super();

//         this.state = {
//             Showsub: false
//         };

//         this.Showsub = this.Showsub.bind(this);
//         this.Closesub = this.Closesub.bind(this);

//     }

//     Showsub(event) {
//         event.preventDefault() ;

//         this.setState({Showsub: true}, () => {
//             document.addEventListener ('click', this.Closesub);
//         });
//     }


//     Closesub (event) {

//         if (!this.dropdownMenu.contains(event.target)) {
      
//             this.setState({ Showsub: false }, () => {
//               document.removeEventListener('click', this.closeMenu);
//             });  
//         }

// }

//     render() {
//         return (
//             <div>
//             <button onClick={this.Showsub}>
//               Show menu
//             </button>


//            { this.state.Showsub

//            ? (
//             <div className="menu"
//             ref={(element) => {
//                 this.dropdownMenu = element;
//             }}>

//             <button> Basic </button>
//             <button> Advanced </button>
//             <button> About us </button>
//             <button> Tutorial </button>
//           </div>
//            )
//            : (
//                null
//            )
//     }
//         </div>
//            );
           
//       }
//     }