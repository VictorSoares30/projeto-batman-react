import React from "react";
import './style.css'

function User(props) {

    return (
        <div className="user-container">
            <span className="user-logado">{props.name} Logado</span>
        </div>
    )
}

export default User;