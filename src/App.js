import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"
import Checkout from "./components/checkout/Checkout"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from './components/login/Login'

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/checkout" element={ <Checkout /> } />
                    <Route path="/login" element={ <Login /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App