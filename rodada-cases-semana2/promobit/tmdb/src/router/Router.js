import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header/Header";
import { HomePage } from "../pages/home/HomePage";
import { PaginaFilme } from "../pages/paginaFilme/PaginaFIlme";


export function Router(){
    return( 
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<HomePage/>} />
                <Route path="/filmes/:idFilme"  element={<PaginaFilme/>}/>
            </Routes>
        </BrowserRouter>
    )
}
 