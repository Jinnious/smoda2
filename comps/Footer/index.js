
import React from 'react';
import './footer.css';
import BasicButton from '../buttons/button1';
import { Button1 } from '../../stories/Button.stories';


const Footer = () => <div className="footer">


        <div className="button_down"><Button1 /></div>

</div>;

Footer.defaultProps = {
}


export default Footer;