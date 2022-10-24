import React from "react"
import { useParams } from "react-router-dom"
import { Header } from "../../components/header/Header"
import { API_KEY, API_URL } from "../../constantes/api"
import { useRequest } from "../../global/GlobalContext"
import { DetailFilme } from "../../components/details/DetailFilme"
import { Main } from "../home/HomeStyle"

export const PaginaFilme =()=>{
    const params = useParams()
    const API_URL_MOVIE = `${API_URL}movie/`
    
    const[data]=useRequest(
        API_URL_MOVIE,
        `${params.idFilme}?${API_KEY}`,
        []
    )
    const[video]=useRequest(
        API_URL_MOVIE,
        `${params.idFilme}/watch/providers?${API_KEY}`,
        []
    )
    const[recommensations]=useRequest(
        API_URL_MOVIE,
        `${params.idFilme}/recommendations?${API_KEY}`,
        []
    )

    const trailer =video.results

    return(
        <Main>
            <Header/>
            <DetailFilme movie={data} trailer={trailer} recommensations={recommensations} />
        </Main>
    )
}