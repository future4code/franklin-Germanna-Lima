import React from "react";
import { useContext, useEffect } from "react";
import { Game } from "../components/Game";
import { ComponentsMain, ComponentsSection1, ComponentsSection2, ComponentsList, ComponentsTitle, ComponentsFooter } from "../components/styles"
import { GlobalContext } from "../global/GlobalState";
//import logo from "../assets/logo.png"(pegar)

export const DiaDeSorte = ()=>{
    const context= useContext(GlobalContext)
    const {ColorCase, concurso, loteriasConcursos} = context.states
    const {getConcurso} = context.getters
    useEffect(()=>{
        const [idConcurso] = loteriasConcursos?.filter(
            (loteria) => loteria.loteriaId === 5
        )
        getConcurso(idConcurso?.concursoId)
    }, [])

    const data = new Date (concurso?.data).toLocaleDateString()
    const valores = concurso.valores?.map((valores)=><li>{valores}</li>)

    return(
        <ComponentsMain>
            <ComponentsSection1
                style={{background: colorPage, transition: "background 1s"}}
            >
                <Game></Game>
                <ComponentsTitle>
                    <img src={logo} alt="logo" width={50}/>
                    <span>Dia De Sorte</span>
                </ComponentsTitle>
                <ComponentsFooter concursoId={concurso.id} data={data}></ComponentsFooter>
            </ComponentsSection1>
            <ComponentsSection2>
                <ComponentsList>{numeros}</ComponentsList>
                <span>Não tem ligação com a Caixa Econômica Federal</span>
            </ComponentsSection2>
        </ComponentsMain>
    )

}