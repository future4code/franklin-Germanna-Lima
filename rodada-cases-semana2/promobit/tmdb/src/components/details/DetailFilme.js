import React from "react";
import { URL_IMG } from "../../constantes/api";
import { Apresentacao, AvaliacaoH3, AvaliacaoP, DetailFilmeDiv, DivApresentacao, DuracaoH3, DuracaoP, ImgDiv2, SinopseH3, SinopseP } from "../details/DetailStyle";

export const DetailFilme=(props)=>{

    
    const date = new Date(props.movie.release_date)
    // console.log(date)
    // console.log(props)
    // console.log(props.movie)
    // console.log(props.movie.release_date)

    const converter = (minutos)=>{
        const horas=Math.floor(minutos/60)
        const min= minutos%60
        const textoHoras = `00${horas}`.slice(-2)
        const textoMinutos = `00${min}`.slice(-2)
        
        return `${textoHoras}h:${textoMinutos}min`
    }


    const pathImg = URL_IMG
    const pathFilme = props.movie?.poster_path
    const pathTitulo = props.movie?.title
    const pathSinopse = props.movie?.overview
    const pathAvaliacao = props.movie.vote_average


    
    return(
        <div>
            <DetailFilmeDiv>
                <Apresentacao>
                    <ImgDiv2>
                        <img src={`${pathImg}${pathFilme}`} alt="Imagem Filme"/>
                    </ImgDiv2>
                    <DivApresentacao>
                        <h2>{`${pathTitulo} (${date.getFullYear()})`}</h2>
                        {/* <p>{pathLancamento} - {genreName?.toString()}</p> */}
                        
                        <DuracaoH3>Duração: </DuracaoH3>
                        <DuracaoP>{converter(props.movie.runtime)}</DuracaoP>

                        <AvaliacaoH3>Avaliação: </AvaliacaoH3>
                        <AvaliacaoP>{pathAvaliacao?.toFixed(1)}</AvaliacaoP>
                        
                        <SinopseH3>Sinopse: </SinopseH3>
                        <SinopseP>{pathSinopse}</SinopseP>
                    </DivApresentacao>

                </Apresentacao>
            </DetailFilmeDiv>
        </div>
    )
}