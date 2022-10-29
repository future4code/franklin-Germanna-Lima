import React from "react"
import {ComponentsFooter, ConcursoP, DataP, IlustrativoP} from "../footer/styleFooter"


 export default function Footer (props) {
    return(
        <ComponentsFooter>
            <ConcursoP>Concurso</ConcursoP>
            <DataP>{props.concurso} - {props.dataSorteio}</DataP>
            <IlustrativoP>Esse é apenas um jogo ilustrativo. Não tem ligação com a Caixa Econômica Federal</IlustrativoP>

        </ComponentsFooter>
    )
}
//3