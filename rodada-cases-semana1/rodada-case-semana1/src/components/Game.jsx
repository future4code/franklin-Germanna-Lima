import React from "react"
import { useContext, useEffect } from "react"
import {useNavigate} from "react-router-dom"
import {colorCase} from "utils/colorCase"
import{ toDiaDeSorte, toLotomania, toLotofacil, toMegaSena, toQuina, toTimeMania} from "../routes/coordinator"


export const Game = () => {
    const cont = useContext (GoblalContext)
    const nav = useNavigate ()
    const {loterias, loteriasSelecionadas} = cont.states

    const {getLoterias, getloteriasDoConcurso} = cont.getters
    useEffect(() => {
        getLoterias()
        getloteriasDoConcurso()
    },
         []
    )

    const {setLoteriasSelecionadas, setColorPage} = cont.setters
    const options= loterias.map((loteria)=> {
        return(
            <option key={loteria.id} value={loteria.nome}>
                {loteria.nome.toUpperCase()}
            </option>
        )
    })

    const raffling = (i) => {
        setLoteriasSelecionadas(i.target.value)
        switch (i.target.value){

            case "DiaDeSorte":
                setColorPage(colorCase.toDiaDeSorte);
                return toDiaDeSorte(nav);

            case "LotoMania":
                setColorPage(colorCase.toLotomania);
                return toLotomania(nav);

            case "LotoFácil":
                setColorPage(colorCase.toLotofacil);
                return toLotofacil(nav);
            
            case "MegaSena":
                setColorPage(colorCase.toMegaSena);
                return toMegaSena(nav);
            
            case "Quina":
                setColorPage(colorCase.toQuina);
                return toQuina(nav);

            case "TimeMania":
                setColorPage(colorCase.toTimeMania);
                return toTimeMania(nav);

            default:
                return toMegaSena(nav)
            
        }
    }

    return (
        <main>
            <select
                onChange={raffling}
                value={loteriasSelecionadas}
            >
            {options}
            </select>
        </main>
    )
}
//4