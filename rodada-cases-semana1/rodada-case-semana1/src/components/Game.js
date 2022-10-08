import React from "react"
import { useContext, useEffect } from "react"
import {useNavigate} from "react-router-dom"
import {colorCase} from "../utils/colorCase"
import{ toDiaDeSorte, toLotomania, toLotofacil, toMegaSena, toQuina, toTimeMania} from "../routes/coordinator"
import { GlobalContext } from "../global/GlobalState"
import {ComponentsHeader} from "../components/styledHeader"

export function Game (){
    const navigate = useNavigate ()

    const context = useContext (GlobalContext)
    const {loterias, loteriasSelecionadas} = context.states
    const {getLoterias, getloteriasDoConcurso} = context.getters
    const {setLoteriasSelecionadas, setColorPage} = context.setters
    useEffect(() => {
        getLoterias()
        getloteriasDoConcurso()},
        []
    )
    const options= loterias.map((loteria)=> {
        return(
            <option key={loteria.id} value={loteria.nome}>
                {loteria.nome.toUpperCase()}
            </option>
        )
    })

    const sorteio = (i) => {
        setLoteriasSelecionadas(i.target.value)
        switch (i.target.value){

            case "mega-sena":
                setColorPage(colorCase.megasena)
                return toMegaSena(navigate)
            
            case "quina":
                setColorPage(colorCase.quina)
                return toQuina(navigate)
            
            case "lotofácil":
                setColorPage(colorCase.lotofacil)
                return toLotofacil(navigate)
            
            case "lotomania":
                setColorPage(colorCase.lotomania)
                return toLotomania(navigate)
                
            case "timemania":
                setColorPage(colorCase.timemania)
                return toTimeMania(navigate)

            case "dia de sorte":
                setColorPage(colorCase.diadesorte)
                return toDiaDeSorte(navigate)

            default:
                return toMegaSena(navigate)     
        }
    }

    return (
        <ComponentsHeader>
            <select name="sorteio" onChange={sorteio}>
                <option value={loteriasSelecionadas}> Selecione: </option>
                {options}
            </select>
        </ComponentsHeader>
    )
}
//4