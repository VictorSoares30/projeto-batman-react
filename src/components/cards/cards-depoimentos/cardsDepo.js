import React from "react";
import "./style.css";
import Depo1 from "../../../assets/mãe-linda.jpg";
import Depo2 from "../../../assets/depo2.jpg";
import Depo3 from "../../../assets/depo4.jpg";
import { FaStar } from "react-icons/fa";

function CardsDepo() {

    return (
        <section className="depoimentos-container">

            <div className="depoimentos-tittle-box">
                <span className="depoimentos-tittle">Depoimentos</span>
            </div>

            <div className="depoimentos-box">
                <div className="depoimentos-cards" id="depoimentos-cards-1">
                    <div className="depoimentos-card-name">
                        <img src={Depo1} alt="depo1" className="depoimentos-img" />
                        <span className="depoimentos-span">Carmen</span>
                        <div className="star">
                        <i className="star-icon"> <FaStar /> </i>
                        <i className="star-icon"> <FaStar /> </i>
                        <i className="star-icon"> <FaStar /> </i>
                        <i className="star-icon"> <FaStar /> </i>
                        <i className="star-icon"> <FaStar /> </i>
                        </div>
                    </div>

                    <div className="depoimentos-description">
                        <p> "Trabalhar como desenvolvedora web tem sido uma jornada incrível
                            de aprendizado e desafios. Desde o início, fiquei fascinada pela
                            capacidade de criar algo a partir do zero e vê-lo ganhar vida na internet.
                            Cada projeto me ensina algo novo, desde técnicas avançadas de programação
                            até a importância do design centrado no usuário. O que mais me motiva é 
                            saber que estou contribuindo para a experiência online das pessoas e facilitando suas interações com a tecnologia."</p>
                    </div>
                </div>
                
                <div className="depoimentos-cards" id="depoimentos-cards-2">
                    <div className="depoimentos-card-name">
                        <img src={Depo2} alt="depo2" className="depoimentos-img" />
                        <span className="depoimentos-span">Christopher Souza</span>
                        <div className="star">
                        <i className="star-icon"> <FaStar /> </i>
                        <i className="star-icon"> <FaStar /> </i>
                        <i className="star-icon"> <FaStar /> </i>
                        <i className="star-icon"> <FaStar /> </i>
                        <i className="star-icon"> <FaStar /> </i>
                        </div>
                    </div>

                    <div className="depoimentos-description">
                        <p>  "Como desenvolvedor web, encontro inspiração na interseção entre arte e tecnologia. 
                            Criar interfaces intuitivas e belas experiências de usuário é uma verdadeira paixão para mim.
                            A cada projeto, busco equilibrar a funcionalidade com o design elegante, 
                            criando sites e aplicativos que não apenas funcionam bem, mas também encantam os usuários.
                            O ritmo rápido da indústria mantém as coisas emocionantes, pois estou sempre aprendendo
                            novas tecnologias e aprimorando minhas habilidades para oferecer soluções de ponta aos meus clientes."</p>
                    </div>
                </div>

                <div className="depoimentos-cards" id="depoimentos-cards-3">
                    <div className="depoimentos-card-name">
                        <img src={Depo3} alt="depo3" className="depoimentos-img" />
                        <span className="depoimentos-span">Victor Soares</span>
                        <div className="star">
                        <i className="star-icon"> <FaStar /> </i>
                        <i className="star-icon"> <FaStar /> </i>
                        <i className="star-icon"> <FaStar /> </i>
                        <i className="star-icon"> <FaStar /> </i>
                        <i className="star-icon"> <FaStar /> </i>
                        </div>
                    </div>

                    <div className="depoimentos-description">
                        <p>  "Ser um desenvolvedor web é mais do que apenas escrever código; 
                            é uma oportunidade de moldar a paisagem digital de hoje. 
                            Eu adoro a sensação de resolver problemas complexos e transformar 
                            ideias abstratas em produtos tangíveis. Uma das partes mais gratificantes 
                            do meu trabalho é ver o impacto direto do que construí - seja um site de comércio 
                            eletrônico que facilita as compras dos usuários ou uma aplicação que simplifica
                            processos complicados. Cada linha de código é um passo em direção a um mundo digital melhor e mais acessível."</p>
                    </div>
                </div>
            </div>    
        </section>
    )
}

export default CardsDepo;