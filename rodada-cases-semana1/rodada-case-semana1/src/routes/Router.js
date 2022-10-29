import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { DiaDeSorte } from "../pages/DiaDeSorte"
import { LotoMania } from "../pages/LotoMania"
import { MegaSena } from "../pages/MegaSena"
import { LotoFacil } from "../pages/LotoFacil"
import { TimeMania } from "../pages/TimeMania"
import { Quina } from "../pages/Quina"
import { Error } from "../pages/Error"

export function Router(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/dia-de-sorte/lastest"}element={<DiaDeSorte/>}/>
                    <Route path={"/lotomania/lastest"} element={<LotoMania/>}/>
                    <Route path={"/lotofacil/lastest"} element={<LotoFacil/>}/>
                    <Route path={"/timemania/lastest"} element={<TimeMania/>}/>
                    <Route path={"/quina/lastest"}     element={<Quina/>}/>
                    <Route path={"/mega-sena/lastest"}  element={<MegaSena/>}/>
                    
                    <Route path={"/"}          element={<MegaSena/>}/>
                    
                    <Route path={"/"}          element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
