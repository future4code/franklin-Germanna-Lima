import React from "react";
import Logo_TMDB from "../../util/Logo_TMDB.svg";
import { HeaderComponent } from "./HeaderStyle";

export const Header=()=>{
    

    return(
        <HeaderComponent>
           <img  alt={"Imagem do cabeçalho"} src={Logo_TMDB}/>
        </HeaderComponent>
    )
}