import axios from "axios"
import React, { useEffect, useState } from "react"
import Logo_Sena from "../assets/Logo_Sena.svg"
import Footer from "../components/footer/Footer"

import { BASE_URL } from "../utils/BASE_URL"
import { colorCase } from "../utils/colorCase"
import { Body, ComponentsSection1, ComponentsSection2, ComponentsSection2Ul, ComponentsTitle, SidebarComponent } from "./stylePages"

export function TimeMania (){
    //nome = quina
    const [nomeLoteria, setNomeLoteria ] = useState ([])
    //dezenas
    const [dezenas, setDezenas] = useState ([])
    //dia que ocorreu concurso
    const [dataSorteio, setDataSorteio ] = useState ([])
    //número so concurso
    const [concurso, setConcurso ] = useState ([])

    const nomeUrl = "timemania"
    
    // /api/{loteria}/latest - retorna o resultado mais recente da loteria
    const getinfosConcurso = ()=>{
        axios
        .get(`${BASE_URL}/${nomeUrl}/latest`,{})
        .then((res) => {
            setNomeLoteria(res.data.nome)
            setDezenas(res.data.dezenas)
            setDataSorteio(res.data.data)
            setConcurso(res.data.concurso)
        })
        .catch((err) => {console.log(err)})
    }

    useEffect(getinfosConcurso, [])

    return(
        <SidebarComponent>
            <Body>
                <ComponentsSection1 style={{background: colorCase.timemania}}>
                    <ComponentsTitle>
                        <img src={Logo_Sena} alt="logo" width={50}/>
                        <span>
                            <p>{nomeLoteria}</p>
                        </span>
                    </ComponentsTitle>
                </ComponentsSection1>

                <ComponentsSection2>
                    <ComponentsSection2Ul>
                        {dezenas.map((dezenas)=>{return(
                            <li> {dezenas}</li>)})}
                    </ComponentsSection2Ul>
                    
                    <Footer
                        concurso={concurso}
                        dataSorteio={dataSorteio}
                    />
                </ComponentsSection2>
            </Body>
        </SidebarComponent>
    )
}

//12