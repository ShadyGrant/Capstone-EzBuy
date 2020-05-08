import React, { useState } from "react"
import Dashboard from "./Dashboard"
import Auth from "./auth/Auth"
import viewBag from "./viewBag"
import { BrowserRouter,Route } from "react-router-dom"


export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
        localStorage.getItem("capstone_customer") ? (<Dashboard />)
         : (<Auth toggle={toggle}  />)
         
    )
}