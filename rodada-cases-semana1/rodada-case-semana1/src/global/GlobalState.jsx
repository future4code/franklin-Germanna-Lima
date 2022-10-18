import axios from "axios"
import React, { useContext, useEffect, useState } from "react"

export const GlobalContext = React.createContext()
export const useGlobal = ()=> useContext(GlobalContext)

export function GlobalState (props) {

    const[loteria, setLoteria]=useState([])
    const[loteriaConcurso, setLoteriaConcurso]=useState([])
    const[concursosById, setConcursoById]=useState({})
    const[idConcurso, setIdConcurso] = useState([])
    const[pagina, setPagina]=useState("")
    
    const BASE_URL = "https://brainn-api-loterias.herokuapp.com/api/v1"

    const getLoteria = async()=>{
        await axios
        .get(`${BASE_URL}/loterias`)
        .then((res) => {setLoteria(res.data)})
        .catch((err) => {console.log(err)})
    }

    const getLoteriaConcursos = async()=>{
        await axios
        .get(`${BASE_URL}/loterias-concursos`)
        .then((res) => {setLoteriaConcurso(res.data)})
        .catch((err) => {console.log(err)})
    }

    const getConcursosById = async(id)=>{
        await axios.get(`${BASE_URL}/concursos/${id}`)
        .then ((res) => {setConcursoById(res.data)})
        .catch((err) => {console.log(err)})
    }
    
    useEffect(()=>{
        getLoteria()
        getLoteriaConcursos()
    }, [])
    
    const states ={
        loteria,
        loteriaConcurso,
        concursosById,
        idConcurso,
        pagina
    }
    const setters={
        setLoteria,
        setLoteriaConcurso,
        setConcursoById,
        setPagina,
        setIdConcurso
    } 
    const requests={
        getLoteria,
        getConcursosById,
        getLoteriaConcursos
    }

    return(
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
//7