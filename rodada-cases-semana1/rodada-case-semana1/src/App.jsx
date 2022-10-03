import { Router } from "./routes/Router.jsx";
import {GlobalState} from "./global/GlobalState"


export default function App(){
    return(
        <GlobalState>
            <Router>

            </Router>
        </GlobalState>
    )
}
//2