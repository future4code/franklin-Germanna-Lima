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
                    <Route path={"/diadesorte"}element={<DiaDeSorte/>}/>
                    <Route path={"/lotomania"} element={<LotoMania/>}/>
                    <Route path={"/lotofacil"} element={<LotoFacil/>}/>
                    <Route path={"/timemania"} element={<TimeMania/>}/>
                    <Route path={"/quina"}     element={<Quina/>}/>
                    <Route path={"/megasena"}  element={<MegaSena/>}/>
                    
                    <Route path={"/"}          element={<MegaSena/>}/>
                    
                    <Route path={"/"}          element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

//17


// import React from "react"
// import {BrowserRouter, Route, Routes} from "react-router-dom"
// import { DiaDeSorte } from "../pages/DiaDeSorte"
// import { LotoMania } from "../pages/LotoMania"
// import { MegaSena } from "../pages/MegaSena"
// import { LotoFacil } from "../pages/LotoFacil"
// import { TimeMania } from "../pages/TimeMania"
// import { Quina } from "../pages/Quina"
// import { Error } from "../pages/Error"

// export function Router(){
//     return(
//         <div>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path={"/diadesorte"}element={<DiaDeSorte/>}></Route>
//                     <Route path={"/lotomania"} element={<LotoMania/>}></Route>
//                     <Route path={"/lotofacil"} element={<LotoFacil/>}></Route>
//                     <Route path={"/timemania"} element={<TimeMania/>}></Route>
//                     <Route path={"/quina"}     element={<Quina/>}></Route>
//                     <Route index               element={<MegaSena/>}></Route>

//                     <Route path={"/"}          element={<Error/>}></Route>
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }
