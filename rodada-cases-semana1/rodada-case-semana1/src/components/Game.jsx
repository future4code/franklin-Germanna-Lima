import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ComponentsHeader, ComponentsList } from "../components/styledHeader"
import { useGlobal } from "../global/GlobalState"
import { toDiaDeSorte, toLotofacil, toLotomania, toMegaSena, toQuina, toTimeMania } from "../routes/coordinator"


export default function Game (props){
    const {states, setters, requests} = useGlobal()
    const nav = useNavigate()

    const concurso = states.concursosById
    const loteriaConcurso = states.loteriaConcurso
    const loteria = states.loteria
    const pagina = states.pagina
    const setPagina = setters.setPagina

    useEffect(()=>{{
        loteriaConcurso && 
        requests.getConcursosById(loteriaConcurso[Number(props.LoteriaConcurso)].concursoId)
    }}, [])


    const dezenas = 
        concurso &&
        concurso.numeros &&
        concurso.numeros.map((num) => <ComponentsList key={num}> <span>{num}</span> </ComponentsList> )

    const options= loteria.map((loteria)=> {
        return(
            <option
                key={loteria.id}
                value={loteria.nome}
            >
                    {loteria.nome.toUpperCase()}
            </option>
        )
    })

    const sorteio = (i) => {
        setPagina(i.target.value)
        
        switch (i.target.value){

            case "mega-sena":
                // setColorPage(colorCase.megasena)
                return toMegaSena ( nav )
            
            case "quina":
                // setColorPage(colorCase.quina)
                return toQuina ( nav )
            
            case "lotofácil":
                // setColorPage(colorCase.lotofacil)
                return toLotofacil ( nav )
            
            case "lotomania":
                // setColorPage(colorCase.lotomania)
                return toLotomania ( nav )
                
            case "timemania":
                // setColorPage(colorCase.timemania)
                return toTimeMania ( nav )

            case "dia de sorte":
                // setColorPage(colorCase.diadesorte)
                return toDiaDeSorte ( nav )

            default:
                return toMegaSena ( nav )     
        }
    }

    return (
        <ComponentsHeader>
            <li>{states && dezenas}</li>
            <select 
                onChange={sorteio}
                name="sorteio"
                value = {pagina}
            >
                {options}
            </select>
        </ComponentsHeader>
    )
}
//4