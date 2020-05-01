import React from 'react';
import './ciga.css';
import IngName from '../name';

const defaultImg = require('../../../img/smoking.png');

const SmokCiga = ({img}) => <div>

    <div className="ingred_line_one">
        <div className="benzene"><IngName text="Benzene" color="#588B8B" border="#588B8B 3px solid" /></div>
        <div className="butane"><IngName text="Butane" color="#707071" border="#707071 3px solid"/></div>
        <div className="tar"><IngName text="Tar" color="#4469E3" border="#4469E3 3px solid"/></div>
    </div>

    <div className="ciga">
        <img src={img} />
     
        <div className="dot_ben" onClick={ShowBenz()}></div>
        <div className="dot_but"></div>
        <div className="dot_tar"></div>
        <div className="dot_ammo"></div>
        <div className="dot_nic"></div>
        </div>

    <div className="ingred_line_two">
        <div className="annmo"><IngName text="Ammonia" color="#F28F3C" border="#F28F3C 3px solid"/></div>
        <div className="nico"><IngName text="Nicotine" color="#C8553D" border="#C8553D 3px solid"/></div>   
    </div>

  
</div>;





SmokCiga.defaultProps = {
    img:defaultImg
}


export default SmokCiga;

function ShowBenz() {
    document.getElementsByClassName(".benzene").display = "block";
}