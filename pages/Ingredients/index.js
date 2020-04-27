import React from 'react';
import './intro.css';
import Header from '../../comps/Header';
import SmokCiga from '../../comps/ingredients/ciga';
import SubHeader from '../../comps/subheader';

import IngName from '../../comps/ingredients/name';

import {Button1} from '../../stories/Button.stories';

const IngredPage = () => <div className="ingredpg">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <Header />

    <div className="subhead_ingred"><SubHeader text="Ingredients" color="#C8553D"/></div>

    <div className="cigainfo">
        <div className="ingred_line_one">
            <div className="benzene"><IngName text="Benzene" color="#588B8B" border="#588B8B 3px solid" /></div>
            <div className="butane"><IngName text="Butane" color="#707071" border="#707071 3px solid"/></div>
            <div className="tar"><IngName text="Tar" color="#4469E3" border="#4469E3 3px solid"/></div>
        </div>

            <div className="cigaImg"><SmokCiga /></div>
        <div className="ingred_line_two">
            <div className="annmo"><IngName text="Annmonia" color="#F28F3C" border="#F28F3C 3px solid"/></div>
            <div className="nico"><IngName text="Nicotine" color="#C8553D" border="#C8553D 3px solid"/></div>   
        </div>
    </div>

    <div className="button_ingred"><Button1 /></div>
</div>;


export default IngredPage;