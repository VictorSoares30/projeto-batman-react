import React from "react";
import "./style.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { MdPhoneAndroid } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Formulario() {

    return (
        <div className="formulario">
            <div className="contato-tittle">
                <span className="contato-span" id="con-span">Con</span>
                <span className="contato-span" id="ta-span">ta</span>
                <span className="contato-span" id="to-span">to</span>
            </div>

            <div className="form-container">
                <div className="form-content">
                    <div className="form-tittle"> 
                    <span>Envie seu E-mail</span> 
                    <i className="form-tittle-icon"> <MdOutlineEmail /> </i> 
                    </div>

                    <form action="" method="get">
                        <input type="text" name="first-name" placeholder="Nome"/>
                        <input type="text" name="last-name" placeholder="Sobrenome"/>
                        <input type="number" name="number" placeholder="Telefone"/>
                        <input type="text" name="cidade" placeholder="Cidade"/>
                        <input type="email" name="email" placeholder="Email"/>

                        <textarea name="message" placeholder="Descreva sua dúvida"></textarea> 
                    </form>

                    <div className="form-button-box">
                        <button className="form-button">Enviar  <i><GrSend /></i></button>
                    </div>
                </div>

                <div className="contact-box">

                    <div className="contact-tittle">Contatos</div>

                    <div className="contact-content-1">
                        <i className="contact-icon"> <MdPhoneAndroid /> </i>
                        <span className="contact-span"> (47) 996429418</span>
                    </div>
                    <div className="contact-content-2">
                        <i className="contact-icon"> <MdEmail /> </i>
                        <span className="contact-span"> victorsoares411@gmail.com </span>
                    </div>

                    <div className="contact-social-media">
                        <Link to='https://www.facebook.com/victor.soaresdesouza.92/'>
                        <i className="contact-social-media-icon" id="face-icon"> <FaFacebookF /> </i>
                        </Link>
                        <Link to='https://www.instagram.com/iam.victor.soares/'>
                        <i className="contact-social-media-icon" id="insta-icon"> <FaInstagram /> </i>
                        </Link>
                        <Link to='https://www.youtube.com/channel/UCM8_lDwIaFWzKWP8RIq2YGw'>
                        <i className="contact-social-media-icon" id="yt-icon"> <FaYoutube /> </i>
                        </Link>
                        <Link to='https://github.com/VictorSoares30'>
                        <i className="contact-social-media-icon" id="github-icon"> <FaGithub /> </i>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Formulario;