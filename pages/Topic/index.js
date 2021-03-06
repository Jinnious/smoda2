import React from 'react';
import OptionButton from '../../comps/buttons/button3';
import Header from '../../comps/Header';
import './topic.css';
import drk from '../../comps/buttons/button3/beer.png';
import Stack from '../../comps/Stack';
import Link from 'next/link';



const TopicPage = ({drk}) => <div id="topicpage">

<Header/>

<div className='topic_stack'><Link href="/Level"><a><Stack /></a></Link></div>


<div id="topic_buttons">
<Link href='/Option'><a><OptionButton text="Smoking" bgcolor="#c8553D" /></a></Link>

<p></p>

<Link href='/Level'>
    <a><OptionButton text="Drinking" bgcolor="#588B8B" img={drk} />
        </a></Link>


    



</div>

</div>;

TopicPage.defaultProps = {
 
    drk:drk
}






export default TopicPage;