import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Logo from '../../assets/img/largeLogo.png';

class MainMenu extends Component {
    render() {
        return (
            <div className="ContainerHolder">
                    <div className="LogoHolder">
                        <img src={Logo} alt="" className="LogoImage"/>

                    </div>
                <div className="LinkHolder">
                    <Link to="/" className="LinkText">HOME</Link>
                </div>
                <div className="LinkHolder">
                    <Link to="/services" className="LinkText">SERVICES</Link>
                </div>
                <div className="LinkHolder">
                    <Link to="/products" className="LinkText">PRODUCTS</Link>
                </div>
                <div className="LinkHolder">
                    <Link to="/about" className="LinkText">ABOUT</Link>
                </div>
                <div className="LinkHolder">
                    <Link to="/contact" className="LinkText">CONTACT</Link>
                </div>
                <div className="LanguageHolder">
                    <a href="" className="LinkText">HEB | ENG</a>
                </div>

            </div>
        );
    }
}

export default MainMenu;