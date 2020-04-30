import React from 'react';
import StartButton from '../../comps/buttons/button2';
import Header from '../../comps/Header';
import Stack from '../../comps/Stack';
import './option.css';



const OptionPage = ({}) => <div id="optionpage">

<Header/>

<Stack/>


<div id="buttons">
<div>
    <StartButton text="Ingredients" bgcolor="#C8553D" />
    </div>
    <div>
    <StartButton text="Side-Effects" bgcolor="#588B8B" />
    </div>

</div>

</div>

OptionPage.defaultProps = {

}



export default OptionPage;