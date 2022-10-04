import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { DiaDeSorte } from "../pages/DiaDeSorte";
import { LotoMania } from "../pages/LotoMania";
import { MegaSena } from "../pages/MegaSena";
import { LotoFacil } from "../pages/LotoFacil";
import { TimeMania } from "../pages/TimeMania";
import { Quina } from "../pages/Quina";
import { Error } from "../pages/Error";

export default function Router(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/diadesorte"} element={<DiaDeSorte></DiaDeSorte>}></Route>
                    <Route path={"/lotomania"} element={<LotoMania></LotoMania>}></Route>
                    <Route path={"/lotofacil"} element={<LotoFacil></LotoFacil>}></Route>
                    <Route path={"/timemania"} element={<TimeMania></TimeMania>}></Route>
                    <Route path={"/quina"} element={<Quina></Quina>}></Route>
                    <Route path={"/"} element={<MegaSena></MegaSena>}></Route>
                    <Route path={"/"} element={<Error></Error>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

//17