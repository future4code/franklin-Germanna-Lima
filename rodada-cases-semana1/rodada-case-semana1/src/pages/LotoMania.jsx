import React from "react"
import { useNavigate } from "react-router-dom"
import Logo_Sena from "../assets/Logo_Sena.svg"
import Game from "../components/Game"
import { Body, ComponentsFooter, ComponentsSection1, ComponentsSection2, ComponentsTitle, SidebarComponent } from "../components/styles"
import { useGlobal } from "../global/GlobalState"
import { colorCase } from "../utils/colorCase"

export function LotoMania (){
    const {states, setters, requests} = useGlobal()
    const nav = useNavigate()
    

    const data = new Date (states.concurso?.data).toLocaleDateString()
    const valores = states.concurso?.valores.map(valor=>{<li>{valor}</li>})

    return(
        <SidebarComponent>
            <Body>
                <ComponentsSection1 style={{background: colorCase.lotomania}}>
                
                <ComponentsTitle>
                    <img src={Logo_Sena} alt="logo" width={50}/>
                    <span>{
                        states &&
                        states.loteria &&
                        states.loteria[3] &&
                        <p>{states.loteria[3].nome}</p>
                    }</span>
                    </ComponentsTitle>

                    {/* <ComponentsFooter concursoId={states.valores} data={data}/> */}
                </ComponentsSection1>

                <ComponentsSection2>
                    <li>{
                        states.loteria &&
                        states &&
                        states.loteria[3] &&
                        <Game LoteriaConcurso={3}></Game>
                    }</li>
                <p>Esse é apenas um jogo ilustrativo. Não tem ligação com a Caixa Econômica Federal</p>
                </ComponentsSection2>
            </Body>
        </SidebarComponent>
    )
}

//12