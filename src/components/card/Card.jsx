import React from "react";

const Card = ({ ImageUrl, title, description }) => {
    return (
        <>
        <div className="card" class="card" >
            <img class="card-img-top" className="imagen" src={ImageUrl} alt={title}  />
            <div className="card-body" class="card-body">
                <h3 class="card-title">{title}</h3>
                <p class="card-text">{description}</p>
            </div>
            <div class="btn btn-success">Entrar</div>
        </div> 
        <br></br>
        </>
    )
}

export default Card;