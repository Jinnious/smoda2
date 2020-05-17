import React from 'react';
import './ciga.css';
import IngName from '../name';
import Link from 'next/link';

const defaultImg = require('../../../img/smoking.png');

const SmokCiga = ({img}) => {

    return  <div>

                <div className="ingred_line_one">
                    <div className="benzene"><Link href="/Benzene"><a><IngName text="Benzene" color="#588B8B" border="#588B8B 3vw solid" /></a></Link></div>
                    <div className="butane"><Link href="/Butane"><a><IngName text="Butane" color="#707071" border="#707071 3vw solid"/></a></Link></div>
                </div>

                <div className="ciga">
                    <img src={img} />
                
                    <div className="dot_ben" onClick={()=>{
                        ShowBenz();
                    }}></div>
                    <div className="dot_but" onClick={()=>{
                        ShwoBut();
                    }}></div>
                    <div className="dot_tar" onClick={()=>{
                        ShwoTar();
                    }}></div>
                    <div className="dot_ammo" onClick={()=>{
                        ShwoAmmo();
                    }}></div>
                    <div className="dot_nic" onClick={()=>{
                        ShwoNico();
                    }}></div>
                    </div>

                <div className="ingred_line_two">
                    <div className="annmo"><Link href="/Ammonia"><a><IngName text="Ammonia" color="#F28F3C" border="#F28F3C 3vw solid"/></a></Link></div>
                    <div className="nico"><Link href="Nicotine"><a><IngName text="Nicotine" color="#C8553D" border="#C8553D 3vw solid"/></a></Link></div>
                    <div className="tar"><Link href="/Tar"><a><IngName text="Tar" color="#4469E3" border="#4469E3 3vw solid"/></a></Link></div>   
                </div>
            </div>
}

SmokCiga.defaultProps = {
    img:defaultImg
}
export default SmokCiga;

function ShowBenz(){
    document.querySelector(".benzene").style.display = "block";
}

function ShwoBut(){
    document.querySelector(".butane").style.display = "block";
}

function ShwoTar(){
    document.querySelector(".tar").style.display = "block";
}
function ShwoAmmo(){
    document.querySelector(".annmo").style.display = "block";
}
function ShwoNico(){
    document.querySelector(".nico").style.display = "block";
}