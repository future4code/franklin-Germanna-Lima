import React from "react";

function CardPequeno (props) {
    return(
        <div className="bigcard-container">
            <a href={props.link}> {props.nomeRede} </a>
        </div>
    )
}

export default CardPequeno