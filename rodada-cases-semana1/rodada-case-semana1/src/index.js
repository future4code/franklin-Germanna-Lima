import React from "react"
import ReactDOM from "react-dom/client"
import { createGlobalStyle } from "styled-components"
import { App } from "./App"


const PrincipalStyle = createGlobalStyle`
    *{margin:0;
    padding:0;
    font-family:'Montserrat', sans-serif}
`

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        {/* só uma linha o principalStyle*/}
        <PrincipalStyle/>
            <App/> 
    </React.StrictMode>
)
//1
