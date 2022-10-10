import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom"
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { BASE_URL } from "../cosntants/url";
import styled from "styled-components";

const BlocoFilme=styled.div``
const Filtro=styled.div``
const Nav=styled.div``
const ListaFilmes=styled.div``

const Home = ()=>{
    const [filmes, setFilmes]= useState([])
    const [genero, setGenero]= useState([])
    const navigate = useNavigate()
    const [generoAtivo, setGeneroAtivo]= useState()

    useEffect(() => {
        getFilmes(page)
        getGenero()
    }, 
    [page])
}

const getFilmes=(page) =>{
    axios
    .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}>&language=en-US&page=1`)
    .then((res) =>{setFilmes(res.data.results)})
    .catch((err)=>{alert(err.message)})
}

const getGenero=()=>{
    axios
        .get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then((res) =>{setGenero(res.data.genres)})
        .catch((err)=>{alert(err.message)})
}

const mapGenero= geners.map((genre)=>{
    
}

)
const mapFilmes = filmes.filter((movie) => {
    if (generoAtivo>0){
        return movie.genre_ids.includes(generoAtivo)
    }else{
        return movie
    }
}).map((movie)=>{
    const data = movie.release_date.slipt("-",3)
    const ano = data[0]
    const mes = data[1]
    const dia = data[2]
    const click=()=>{useNavigate(`/movie/${movie.id}`)}
    const IMG = "https://image.tmdb.org/t/p/w500"
    return(
        <BlocoFilme key={movie.id} onClick={click()}>
            <h3>{movie.title}</h3>
            <h4>{dia}/{mes}/{ano}</h4>
            <p>{movie.vote_average}</p>
            <img src={IMG + movie.poster_path}></img>
        </BlocoFilme>
    )
})

return(
    <div>
        <Header></Header>
        <body>
            <h1>Filmes e Séries só para você</h1>
            <Filtro>
                <h2>Filtrar por</h2>
                <Nav>{mapGenero}</Nav>
            </Filtro>
            <ListaFilmes>{mapFilmes}</ListaFilmes>
        </body>
        <Footer></Footer>
    </div>
)