
import React from 'react';

import './header.css';
import Link from 'next/link';

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
        

            <Link href="/About"> <a>
            <div className="nav_about">
                {text3}
            </div>
            </a>
        
            </Link>

          

                <Link href="/Tutorial"> <a>
                  <div className="nav_tut">
                {text4}
                  </div>
                </a>

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

//     document.querySelector(".drsm1").display = "inline-block";
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

//     document.querySelector(".drsm2").display = "inline-block";
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
        
    
