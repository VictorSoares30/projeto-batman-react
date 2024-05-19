import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './style.css'
import Logo from '../../assets/logo-batman-sembg.png';


function Header() {
    const navigate = useNavigate();
    const [active, setAcive] = useState("nav-list");
    const [toggleIcon, setToggleIcon] = useState("nav-menu");
    const [animateLinks, setAnimatelinks] = useState("nav-links");
    const [animateLinks2, setAnimatelinks2] = useState("nav-links");
    const [animateLinks3, setAnimatelinks3] = useState("nav-links");
    const [animateLinks4, setAnimatelinks4] = useState("nav-links");
    const [animateLinks5, setAnimatelinks5] = useState("nav-links");

    const navToggle = () => {
        active === "nav-list" ?
        setAcive("nav-list nav-list-active") :
        setAcive("nav-list");

        toggleIcon === "nav-menu" ?
        setToggleIcon("nav-menu toggle") :
        setToggleIcon("nav-menu");

        animateLinks === "nav-links" ?
        setAnimatelinks("nav-links nav-links-animate") :
        setAnimatelinks("nav-links");

        animateLinks2 === "nav-links" ? 
        setAnimatelinks2("nav-links nav-links-animate2") :
        setAnimatelinks2("nav-links");

        animateLinks3 === "nav-links" ? 
        setAnimatelinks3("nav-links nav-links-animate3") :
        setAnimatelinks3("nav-links");

        animateLinks4 === "nav-links" ? 
        setAnimatelinks4("nav-links nav-links-animate4") :
        setAnimatelinks4("nav-links");

        animateLinks5 === "nav-links" ? 
        setAnimatelinks5("nav-links nav-links-animate5") :
        setAnimatelinks5("nav-links");
    }
     
    return (
        <header>
            <nav className="nav-header" >

                <Link to='/'>
                    <img id="logo" src={Logo} alt="logo"/>
                </Link>
                <ul className={active}>
                    <Link style={{ textDecoration: 'none'}} to='/'>
                    
                    <li className={animateLinks}>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/fotos'>
                    
                    <li className={animateLinks2}>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/contato'>
                    
                    <li className={animateLinks3}>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/comentarios'>
                    <li className={animateLinks4}>Comentários</li>
                    </Link>
                    <li className={animateLinks5} onClick={() => navigate('/user')}>Login</li>
                </ul>
                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </nav>
        </header>
    )
}

export default Header;