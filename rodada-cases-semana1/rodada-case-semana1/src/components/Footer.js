import React from "react";
import {ComponentsFooter} from "./styles"


 export default function Footer (props) {
    return(
        <ComponentsFooter>
            <p>Concurso</p>
            
            <p>{props.concursoId} - {props.data}</p>
        </ComponentsFooter>
    );
}
//3