import React from "react"
import { BagProvider } from "./bags/BagProvider"
import BagList from "./bags/BagList"
import { Bag } from "./bags/Bag"
import "./Capstone.css"
import "./bags/Bag.css"


export default  () => (
    <>
        <h2>Welcome to EzBuy!!</h2>

        <BagProvider>
            <BagList /> 
        </BagProvider>
    </>
)