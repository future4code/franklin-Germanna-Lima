import React from "react";
import { createContext, useEffect, useState } from "react";
import {colorCases} from "..utils/colorsCases"
import { BASE_URL } from "../constants/url";

export const GlobalContext = createContext();

export const GlobalState = (props) =>{
    const[loterias, setLoterias]=useState([]);
    async function getLoterias (){
        await axios
        .get(`${BASE_URL}/loterias`)
        .then((res) => setLoterias(res.data))
        .catch((error) => console.log(error))
    }

    const[concursos, setConcursos]=useState([]);
    async function getConcursos (id){
        await axios
        .get(`${BASE_URL}/concurso/${id}`)
        .then((res) => setConcursos(res.data))
        .catch((error) => console.log(error))
    }

    const[loteriasConcursos, setLoteriasConcursos]=useState([]);
    async function getLoteriasConcursos (){
        await axios
        .get(`${BASE_URL}/loteriasConcursos`)
        .then((res) => setLoteriasConcursos(res.data))
        .catch((error) => console.log(error))
    }

    const[loteriasSeleciondas, setLoteriasSelecionadas]=useState(["MegaSena"]);
    const[caseColor, setCaseColor] = useState([colorCases.megaSena]);

    

    useEffect(()=>{
        getLoterias()
        getLoteriasConcursos()
    },
    [])
    
    const states ={loterias, concursos, loteriasConcursos, loteriasSeleciondas, caseColor}
    const setters={setLoterias, setConcursos, setLoteriasConcursos, setLoteriasSelecionadas, setCaseColor}
    const getters={getLoterias, getConcursos, getLoteriasConcursos}

    return(
        <GlobalContext.Provider value={{states, setters, getters}}>
            {props.children}
        </GlobalContext.Provider>
    )

}
//7