import React from "react";
import "./style.css";
import bg1 from "../../assets/carrossel-1.jpg";
import bg2 from "../../assets/carrossel-2.jpg";
import bg3 from "../../assets/carrossel-3.jpg";
import bg4 from "../../assets/carrossel-4.jpg";
import bg5 from "../../assets/carrossel-5.jpg";
import bg6 from "../../assets/carrossel-6.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carrossel() {

    function nextSlide() {
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').appendChild(items[0])
    }

    function prevSlide() {
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').prepend(items[items.length - 1])
    }

    return (
        <section className="slide-section">
            <div className="fotos-tittle">Fotos</div>

            <div className="container">
                <div className="slide">

                    <div className="item" style={{ backgroundImage: `url(${bg1})`}}>
                        <div className="content">
                            <div className="name">Título</div>
                            <div className="description">Insira uma descrição</div>
                            <button className="button-eu-creio">Clique!</button>
                        </div>
                    </div>

                    <div className="item" style={{ backgroundImage: `url(${bg2})`}}>
                        <div className="content">
                            <div className="name">Título</div>
                            <div className="description">Insira uma descrição</div>
                            <button className="button-eu-creio">Clique!</button>
                        </div>
                    </div>

                    <div className="item" style={{ backgroundImage: `url(${bg3})`}}>
                        <div className="content">
                            <div className="name">Título</div>
                            <div className="description">Insira uma descrição</div>
                            <button className="button-eu-creio">Clique!</button>
                        </div>
                    </div>

                    <div className="item" style={{ backgroundImage: `url(${bg4})`}}>
                        <div className="content">
                            <div className="name">Título</div>
                            <div className="description">Insira uma descrição</div>
                            <button className="button-eu-creio">Clique!</button>
                        </div>
                    </div>

                    <div className="item" style={{ backgroundImage: `url(${bg5})`}}>
                        <div className="content">
                            <div className="name">Título</div>
                            <div className="description">Insira uma descrição</div>
                            <button className="button-eu-creio">Clique!</button>
                        </div>
                    </div>

                    <div className="item" style={{ backgroundImage: `url(${bg6})`}}>
                        <div className="content">
                            <div className="name">Título</div>
                            <div className="description">Insira uma descrição</div>
                            <button className="button-eu-creio">Clique!</button>
                        </div>
                    </div>

                </div>

                <div className="button-carrossel">
                    <button onClick={prevSlide} className="prev"> <FaArrowLeft /> </button>
                    <button onClick={nextSlide} className="next"> <FaArrowRight /> </button>
                </div>
            </div>
       </section>
    )
}

export default Carrossel;