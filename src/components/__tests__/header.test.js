import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"

it("loadiing header component with redux and reactrouterdm", ()=>{
    <BrowserRouter>
    <Provider store={appStore}> 
    render(<Header/>)
    </Provider>
    </BrowserRouter>
})