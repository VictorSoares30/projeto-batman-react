import React from "react";
import './style.css';
import Header from '../../components/header/header';
import Carrossel from "../../components/carrossel-imgs/carrossel";
import Footer from "../../components/footer/footer";


function Fotos() {

    return (
        <div className="main-container"> 
            <Header />
            <div className="modal"></div>
            <Carrossel />
            <Footer />
        </div>
    )
}

export default Fotos;