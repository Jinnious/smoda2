import React from 'react';
import StartButton from '../../comps/buttons/button2';
import Header from '../../comps/Header';
import Stack from '../../comps/Stack';
import './option.css';
import Link from 'next/link';



const OptionPage = ({}) => <div id="optionpage">

<Header/>

<div className='stack'>
    <Link href="/Level"><a><Stack /></a></Link>
    <Stack text="Smoking" backgroundColor="#C8553D" />
</div>



<div id="buttons_option">
<div>
    <Link href='/Ingred'><a><StartButton text="Ingredients" bgcolor="#C8553D" /></a></Link>
    </div>
    <div>
    <Link href="/EffectSelect"><a><StartButton text="Side-Effects" bgcolor="#588B8B" /></a></Link>
    </div>
    <Link href="/Quiz1"><a><StartButton text="Quiz" bgcolor="#F28F3C" /></a></Link>
    </div>

</div>



OptionPage.defaultProps = {

}



export default OptionPage;