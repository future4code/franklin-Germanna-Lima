import React from "react"
import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { colorCase } from "../utils/colorCase"

export const GlobalContext = createContext()

export function GlobalState (props) {

    const[loterias, setLoterias]=useState([])
    const[concursos, setConcursos]=useState([])
    const[loteriasConcursos, setLoteriasConcursos]=useState([])
    const[loteriasSeleciondas, setLoteriasSelecionadas]=useState(["MegaSena"])
    const[caseColor, setCaseColor] = useState([colorCase.megasena])

    function getLoterias (){
        axios
        .get(`https://brainn-api-loterias.herokuapp.com/api/v1/loterias`)
        .then((res) => {setLoterias(res.data)})
        .catch((err) => {console.log(err)})
    }

    function getConcursos (id){
        axios
        .get(`https://brainn-api-loterias.herokuapp.com/api/v1/concurso/${id}`)
        .then((res) => {setConcursos(res.data)})
        .catch((err) => {console.log(err)})
    }

    function getLoteriasConcursos (){
        axios
        .get(`https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos`)
        .then((res) => {setLoteriasConcursos(res.data)})
        .catch((err) => console.log(err))
    }

    useEffect(()=>{
        getLoterias()
        getLoteriasConcursos()
    },
    [])
    
    const states ={loterias, concursos, loteriasConcursos,loteriasSeleciondas, caseColor}
    const setters={setLoterias, setConcursos, setLoteriasConcursos,setLoteriasSelecionadas, setCaseColor} 
    const getters={getLoterias, getConcursos, getLoteriasConcursos}

    return(
        <GlobalContext.Provider value={{states, setters, getters}}>
            {props.children}
        </GlobalContext.Provider>
    )

}
//7