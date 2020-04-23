import React from 'react';
import './about.css';


const defaultImg = require('./ammonia.png');

const IngredAbout = ({img}) => <div>
    <div className="about_img">
        <img src={img} />
    </div>
</div>;

IngredAbout.defaultProps = {
    img:defaultImg
}

export default IngredAbout;