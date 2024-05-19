import React from "react";
import './style.css';
import Logo from '../../assets/logo-batman-sembg.png';
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer>
                <div className="footer-logo-menu">
                    <img id="footer-logo" src={Logo} alt="logo-img" />
                    <nav className="footer-nav">
                        <ul className="footer-ul">
                            <Link style={{ textDecoration: 'none'}} to='https://www.adorocinema.com/filmes/filme-211012/creditos/'>
                            <li className="li-footer">Elenco</li>
                            </Link>
                            <Link style={{ textDecoration: 'none'}} to='https://tecnoblog.net/responde/qual-a-ordem-cronologica-dos-filmes-do-batman/'>
                            <li className="li-footer">Filmes</li>
                            </Link>
                            <Link style={{ textDecoration: 'none'}} to='https://www.ingresso.com/filme/batman'>
                            <li className="li-footer">Onde compro meu ingresso?</li>
                            </Link>
                            <Link style={{ textDecoration: 'none'}} to='https://multiverse.dc.com/myoriginstory/?_gl=1%2ayxu45l%2a_gcl_au%2aMTA0Mzg4MDYyMS4xNzE0OTI4MDk3'>
                            <li className="li-footer">Tudo sobre a DC!</li>
                            </Link>
                        </ul>
                    </nav>
                </div>

                <div className="footer-copy">
                    <span className="footer-span">Desenvolvido por Victor Soares de Souza</span>
                    <span className="footer-span">&copy; Todos os direitos reservados</span>
                </div>
            
        </footer>
    )
}

export default Footer;