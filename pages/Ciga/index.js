import React from 'react';
import './ciga.css';
import SubHeader from '../../comps/subheader';
import SmokCiga from '../../comps/ingredients/ciga';
import Header from '../../comps/Header';
import BasicButton from '../../comps/buttons/button1';




const SmokIngred = () => <div className="smoking">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>



    <Header/>

    <SubHeader text="Ingredients" color="#C8553D"/>
    <div className="ciga_title">What is in a cigarette?</div>
    <div className="cigaImg"><SmokCiga /></div>



    <div className="effect_footer_button">
                        <BasicButton text="Back" bgcolor="#588B8B" onClick={()=>{
                            if(ind<=0){
                                Router.push("/Option");
                            }
                            else{
                                setInfo(ind-1);
                            }
                        }}/>
                        <BasicButton text="Next" bgcolor="#F28F3C" onClick={()=>{
                            if(ind>=2){
                                Router.push("/Butane");
                            }
                            else{
                                setInfo(ind+1);
                            }
                        }}/>
                    </div>


</div>;


export default SmokIngred;