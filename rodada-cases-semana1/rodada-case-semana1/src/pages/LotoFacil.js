import React from "react";
import { useContext, useEffect } from "react";
import { Game } from "../components/Game";
import { ComponentsMain, ComponentsSection1, ComponentsSection2, ComponentsList, ComponentsTitle, ComponentsFooter } from "../components/styles"
import { GlobalContext } from "../global/GlobalState";
//import logo from "../assets/logo.png"(pegar)

export default function LotoFacil (){
    const context= useContext(GlobalContext)

    const {concurso, loteriasConcursos} = context.states
    const {ColorCase} = context.states
    const {getConcurso} = context.getters

    useEffect(() => {
        const [idConcurso] = loteriasConcursos?.filter(
            (loteria) => loteria.loteriaId === 2
        )
        getConcurso(idConcurso?.concursoId)
    }, [])

    const data = new Date (concurso?.data).toLocaleDateString()
    const valores = concurso.valores?.map((valores)=><li>{valores}</li>)

    return(
        <ComponentsMain>
            <ComponentsSection1 style={{background: ColorCase, transition: "background 1s"}}>
                <Game/>

                <ComponentsTitle>
                    <img src={logo} alt="logo" width={50}/>
                    <span>LtoFácil</span>
                </ComponentsTitle>

                <ComponentsFooter concursoId={concurso.id} data={data}/>
            </ComponentsSection1>

            <ComponentsSection2>
                <ComponentsList>{valores}</ComponentsList>
                <span>Esse é apenas um jogo ilustrativo. Não tem ligação com a Caixa Econômica Federal</span>
            </ComponentsSection2>

        </ComponentsMain>
    )

}

//11