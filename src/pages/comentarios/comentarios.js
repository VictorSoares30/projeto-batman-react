import React from "react";
import "./style.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer"
import CardsDepo from "../../components/cards/cards-depoimentos/cardsDepo";


function Comentarios() {

    return (
        <div className="comentarios-box">
            <Header />
            <CardsDepo />
            <Footer />
        </div>
    )
}

export default Comentarios;