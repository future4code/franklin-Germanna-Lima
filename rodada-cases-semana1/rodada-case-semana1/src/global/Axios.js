// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { BASE_URL } from "../utils/BASE_URL";

// export const GlobalContext = React.createContext()
// export const useGlobal = ()=> useContext(GlobalContext)

// export const Axios=(props)=>{
//   //nome = mega-sena
//   const [nomeLoteria, setNomeLoteria ] = useState ([])
//   //dezenas
//   const [dezenas, setDezenas] = useState ([])
//   //dia que ocorreu concurso
//   const [dataSorteio, setDataSorteio ] = useState ([])
//   //número so concurso
//   const [concurso, setConcurso ] = useState ([])

//   // /api/{loteria}/latest - retorna o resultado mais recente da loteria

//   const getinfosConcurso = (id)=>{
//       axios
//       .get(`${BASE_URL}/${id}/latest`)
//       .then((res) => {
//           setNomeLoteria(res.data.nome)
//           setDezenas(res.data.dezenas)
//           setDataSorteio(res.data.data)
//           setConcurso(res.data.concurso)
//       })
//       .catch((err) => {console.log(err)})
//   }

//   useEffect(()=>{
//     getinfosConcurso("mega-sena")},
//     [])

//     const states ={
//         nomeLoteria,
//         dezenas,
//         dataSorteio,
//         concurso
//     }
//     const setters={
//         setNomeLoteria,
//         setDezenas,
//         setDataSorteio,
//         setConcurso
//     } 
//     const requests={
//         getinfosConcurso
//     }
    
        
//     return(
//         <GlobalContext.Provider value={{states, setters, requests}}>
//             {props.children}
//         </GlobalContext.Provider>
//     )
// }