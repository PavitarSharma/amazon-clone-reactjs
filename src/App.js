import { useEffect } from "react"

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"
import Checkout from "./components/checkout/Checkout"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from './components/login/Login'
import { auth } from './firebase'
import { onAuthStateChanged } from "firebase/auth"
import { useStateValue } from './state/StateProvider'

const App = () => {
    const [ {}, dispatch ] = useStateValue()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if(user) {
                dispatch({
                    type: 'SET_USER',
                    user: user
                })
            }else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })

    }, [])
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