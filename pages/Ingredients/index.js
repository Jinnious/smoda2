import React from 'react';
import './intro.css';
import Header from '../../comps/Header';
import SmokCiga from '../../comps/ingredients/ciga';
import SubHeader from '../../comps/subheader';

import {Button1} from '../../stories/Button.stories';

const IngredPage = () => <div className="ingredpg">

    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
    <Header />

    <SubHeader text="Ingredients" color="#C8553D"/>

    <div>
        <div>

        </div>
        <div><SmokCiga /></div>
        <div>
            
        </div>
    </div>
</div>


