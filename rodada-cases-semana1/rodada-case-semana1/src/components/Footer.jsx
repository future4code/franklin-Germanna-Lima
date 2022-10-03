import React from "react";
import {ComponentsFooter} from "./styles"


export const Footer = (props) => {
    return(
        <ComponentsFooter>
            <p>Concurso</p>
            {props.concurso &&
            (
                <div>
                    {props.concurso} - 
                    {props.data}
                </div>
            )}
        </ComponentsFooter>
    )
}
//3