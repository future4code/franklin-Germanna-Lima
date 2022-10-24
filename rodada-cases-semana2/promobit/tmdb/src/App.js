import React from "react"
import {GlobalState} from "../src/global/GlobalState"
import {Router} from "../src/router/Router"
import styled from "styled-components"

const ConfigGeral = styled.div`
  *{
    padding: 0;
    margin: 0;
    font-family: Roboto;
    font-style: normal;
  }
`

export default function App (){
  return (
    <ConfigGeral>
      <GlobalState>
        <Router/>
      </GlobalState>
    </ConfigGeral>
  )
}