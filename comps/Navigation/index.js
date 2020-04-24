
import React from 'react';
import './navigation.css';


const defaultImg = require('./hamburger.png');

const Navigation = ({img}) => <div>
    <div className="hamburger_img"> <img src={img} /></div>
</div>;

Navigation.defaultProps = {
    img:defaultImg
}


export default Navigation;