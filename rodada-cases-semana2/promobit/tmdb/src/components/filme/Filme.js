import React from "react"
import { useNavigate } from "react-router-dom"
import { goMovie } from "../../router/coordinator"
import { ButtonFilme, FilmeUl } from "../filme/FilmeStyle"


export const Filme =(props)=>{
    const nav = useNavigate()
    
    const pathImg = "https://image.tmdb.org/t/p/w500"
    const pathFilme = props.movie.poster_path
    
    const titleFilme = props.movie.title
    const releaseFilme = props.movie.release_date


    return(
        <ButtonFilme>
            <FilmeUl>
                <img
                onClick={()=>{goMovie(nav, props.movie.id)}} 
                height="264"
                width="176"
                src={`${pathImg}${pathFilme}`}
                alt="Imagem do poster de cada filme"
                />
                <h3>{titleFilme}</h3>
                <p>{releaseFilme}</p>
            </FilmeUl>
        </ButtonFilme>
    )
}