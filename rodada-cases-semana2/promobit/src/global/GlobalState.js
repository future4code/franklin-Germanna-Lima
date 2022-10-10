import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom"
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { BASE_URL } from "../cosntants/url";

const Home = ()=>{
    const [filmes, setFilmes]= useState([])
    const [genero, setGenero]= useState([])
    const navigate = useNavigate()

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

