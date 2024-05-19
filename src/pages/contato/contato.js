import React from "react";
import "./style.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer"
import Formulario from "../../components/formulario-contato/formulario";


function Contato() {

    return (
        <div className="contato-container">
            <Header />
            <Formulario />
            <Footer />
        </div>
    )
}

export default Contato;