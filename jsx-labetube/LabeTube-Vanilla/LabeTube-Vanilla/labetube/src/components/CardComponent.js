import React from "react";
import styled from "styled-components";

const Caixa=styled.div`
border: 1px solid grey;
`

 function Card(props){
    const titulo="Título do vídeo";
    
    function reproduzVideo(){
        alert ("O vídeo está sendo reproduzido");
    }
    
    return(
        <Caixa className={props.classNameCard} onClick={reproduzVideo}>
            <img src={props.srcCard} alt=""/>
            <button> Play</button>
            <h4>{titulo}</h4>

         </Caixa>
    )
};

export {Card};

