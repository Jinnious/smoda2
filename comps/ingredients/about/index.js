import React from 'react';
import './about.css';


const defaultImg = require('./ammonia.png');

const IngredAbout = ({img}) => <div>
    <div> <img src={img} /></div>
    <div>hello</div>
</div>;

IngredAbout.defaultProps = {
    img:defaultImg
}


export default IngredAbout;