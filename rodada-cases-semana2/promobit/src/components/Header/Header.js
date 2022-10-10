import React from "react"
import styled from "styled-components"

Header=styled.header`
    display: flex;
`

//logo
function scroll(){
    window.scroll(0,0)
}


export function Header(){
    return(
        <Header>
            <img src = "###" onClick={scroll}/>
        </Header>
    )
}

//2