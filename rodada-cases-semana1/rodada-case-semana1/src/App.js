import { Router } from "./routes/Router.js"
import {GlobalState} from "./global/GlobalState"
import {Body} from "./components/styles"


export default function App(){
    return(
        <Body>
            <GlobalState>
                <Router>

                </Router>
            </GlobalState>
        </Body>
    )
}
//2
