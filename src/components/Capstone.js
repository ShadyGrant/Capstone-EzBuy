import React from "react"
import { BagProvider } from "./bags/BagProvider"
import BagList from "./bags/BagList"
import "./Capstone.css"
import "./bags/Bag.css"
import { ItemProvider } from "./items/ItemProvider"
import ItemList from "./items/ItemList"
import "./items/Item.css"


export default  () => (
    <>
        <h2>Welcome to EzBuy!!</h2>

        <BagProvider>
            <BagList />
        </BagProvider>

        <ItemProvider>
            <ItemList />
        </ItemProvider>
    </>
)