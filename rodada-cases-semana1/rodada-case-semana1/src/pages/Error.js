import React from "react";
import styled from "styled-components";
//import logo from "../assets/logo.png"(pegar)

const ComponentsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Error (){
    return(
        <ComponentsDiv>
            <img width={600} src= {logo}/>
        </ComponentsDiv>
    )
}

//16