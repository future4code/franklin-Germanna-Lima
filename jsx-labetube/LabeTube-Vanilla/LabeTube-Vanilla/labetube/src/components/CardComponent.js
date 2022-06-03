import React from "react";


 function Card(props){
    const titulo="Título do vídeo";
    
    function reproduzVideo(){
        alert ("O vídeo está sendo reproduzido");
    }
    
    return(
        <div className={props.classNameCard} onclick={reproduzVideo}>
        <img src={props.srcCard} alt=""/>
        <h4>{titulo}</h4>
        <button> Play</button>
    </div>
    )
};

export {Card};

