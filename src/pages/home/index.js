import React from "react";
import Header from "../../components/header/header";
import './style.css'
import Video from'../../assets/trailer-batman2.mp4';

import Footer from "../../components/footer/footer";
import CardsBatman from "../../components/cards/cards-batman/cardsBatman";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div className="body">
            <Header />
                <div id="banner"></div>
                <div id="trailer-container">
                    <div className="content">
                        <video controls className="trailer">
                            <source  src={Video}/>
                            Seu navegador não possui suporte para videos
                        </video>
                        <div id="sinopse">
                            <p className="description">
                            Após dois anos espreitando as ruas como Batman, 
                            Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. 
                            Com poucos aliados confiáveis, o vigilante solitário se estabelece 
                            como a personificação da vingança para a população.
                            </p>
                            <Link to='https://www.ingresso.com/filme/batman'>
                            <button className="button-ingresso">Comprar Ingresso</button>
                            </Link>
                        </div>
                    </div>
                </div>
            <CardsBatman />
            <Footer />
        </div>
    )
}

export default Home;