import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router"


export function App(){
  return(
    <BrowserRouter>
      <div>
        <Router></Router>
      </div>
    </BrowserRouter>
  )
}
//1