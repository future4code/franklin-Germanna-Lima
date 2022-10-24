import React from "react"

export const Genre= (props)=>{

    return(
            <div key={props.genre}>
                <p>{props.genre}</p>
            </div>
    )
}