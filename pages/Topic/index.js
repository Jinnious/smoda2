import React from 'react';
import OptionButton from '../../comps/buttons/button3';
import Header from '../../comps/Header';
import './topic.css';
import drk from '../../comps/buttons/button3/beer.png';
import Stack from '../../comps/Stack';



const TopicPage = ({drk}) => <div id="topicpage">

<Header/>

<Stack/>

<div id="buttons">
<OptionButton text="Smoking" bgcolor="#c8553D" />
<p></p>
<OptionButton text="Drinking" bgcolor="#588B8B" img={drk} />
</div>

</div>;

TopicPage.defaultProps = {
 
    drk:drk
}






export default TopicPage;