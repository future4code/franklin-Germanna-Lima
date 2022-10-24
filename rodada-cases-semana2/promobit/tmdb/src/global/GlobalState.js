

import { GlobalContext } from "./GlobalContext";

// export const GlobalContext = createContext()
// export const useGlobal = ()=> useContext(GlobalContext)

export const GlobalState = (props) =>{
    return(
        <div>
            <GlobalContext.Provider>{props.children}</GlobalContext.Provider>
        </div>
    )
}

