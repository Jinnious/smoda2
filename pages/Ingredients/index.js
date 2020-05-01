import React from 'react';
import './intro.css';
import Header from '../../comps/Header';
import SmokCiga from '../../comps/ingredients/ciga';
import SubHeader from '../../comps/subheader';



import {Button1} from '../../stories/Button.stories';

const IngredPage = ({}) => <div className="ingredpg">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <Header />

    <div className="subhead_ingred"><SubHeader text="Ingredients" color="#C8553D"/></div>

    <div className="cigainfo">
        
            <div className="cigaImg"><SmokCiga /></div>
        

    </div>
    <div className="button_ingred"><Button1 /></div>
</div>;


export default IngredPage;