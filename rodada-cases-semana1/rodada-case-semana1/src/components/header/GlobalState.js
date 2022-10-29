import React, { useState } from "react"
import { ComponentsHeader } from "../../components/header/styledHeader"
import { DiaDeSorte } from "../../pages/DiaDeSorte"
import { LotoFacil } from "../../pages/LotoFacil"
import { LotoMania } from "../../pages/LotoMania"
import { MegaSena } from "../../pages/MegaSena"
import { Quina } from "../../pages/Quina"
import { TimeMania } from "../../pages/TimeMania"

// export const GlobalContext = React.createContext()
// export const useGlobal = ()=> useContext(GlobalContext)

export function GlobalState () {
    const [concurso, setNomeLoteria ] = useState ({value:"mega-sena"})

    const option =(i)=>{ setNomeLoteria({value: i.target.value})}


    const sorteio = () => {    
        switch (concurso.value){
            case "mega-sena":
                return <MegaSena/>
            case "quina":
                return <Quina/>
            case "lotofacil":
                 return <LotoFacil/>
            case "lotomania":
                 return <LotoMania/>
            case "timemania":
                return <TimeMania/>
            case "dia-de-sorte":
                return <DiaDeSorte/>

            default  : 
            return <MegaSena/>     
        }
    }

    return (
        <ComponentsHeader>
            <select 
                onChange = { option }
                name     = "sorteio"
                value    = { concurso.value }
            >
                <option value="mega-sena">      MegaSena        </option>
                <option value="quina">          Quina           </option>
                <option value="lotofacil">      Lotofacil       </option>
                <option value="lotomania">      Lotomania       </option>
                <option value="timemania">      Timemania       </option>
                <option value="dia-de-sorte">   Dia de Sorte    </option>

            </select>
                <div>{sorteio()}</div>
        </ComponentsHeader>
    )
}