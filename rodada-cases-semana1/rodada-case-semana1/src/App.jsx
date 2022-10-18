import { Body } from "./components/styles"
import { GlobalState } from "./global/GlobalState"
import { Router } from "./routes/Router"


export default function App(){
    return(
        <Body>
            <GlobalState>
                <Router/>
            </GlobalState>
        </Body>
    )
}
//2
