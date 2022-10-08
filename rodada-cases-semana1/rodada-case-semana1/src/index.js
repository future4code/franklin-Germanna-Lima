import App from "./App"
import { createGlobalStyle } from "styled-components"
import React from "react"
import { ReactDOM } from "react-dom/client"

const PrincipalStyle = createGlobalStyle`
    *{margin:0;
    padding:0;
    font-family:'Montserrat', sans-serif}
`

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <PrincipalStyle/>
        <App></App>
    </React.StrictMode>
)
//1
