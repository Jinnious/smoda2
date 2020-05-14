import React from 'react';
import StartButton from '../../comps/buttons/button2';
import Header from '../../comps/Header';
import Stack from '../../comps/Stack';
import './option.css';
import Link from 'next/link';
import Router from 'next/router';
import {data, ChangeData} from '../../data';


const OptionPage = ({}) => {
  console.log(data);
  var num = data.numClicks;
    return<div id="optionpage">

        <Header/>

        <div className='stack'>
            <Stack onClick={()=>{
                Router.push("/Level");
            }}/>
            <Stack text="Smoking" backgroundColor="#C8553D" onClick={()=>{
                Router.push("/Topic");
            }}/>
        </div>



        <div id="buttons_option">
            <div>
                <StartButton text="Ingredients" bgcolor="#C8553D" onClick={()=>{
                    ChangeData({
                        lastaction:"ingredPage",
                        numClicks:num+1
                    })
                    Router.push("/Ingred");
                }} />
            </div>
            <div>
                {data.lastaction !=="smoda" ? <StartButton text="Side-Effects" bgcolor="#588B8B" onClick={()=>{
                    ChangeData({
                        lastaction:"effectPage",
                        numClicks:num+1
                    })
                    Router.push("/EffectSelect");
                }}/> : <StartButton bgcolor="#C0C0C0"text="Side-Effects"/>}
           </div>
                {data.lastaction =="effectPage" || data.numClicks > 2 ? <StartButton text="Quiz" bgcolor="#F28F3C" onClick={()=>{
                    Router.push("/Quiz1");
                }} /> : <StartButton bgcolor="#C0C0C0"text="Quiz"/>}
        </div>

    </div>
}


OptionPage.defaultProps = {

}



export default OptionPage;