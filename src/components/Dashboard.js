import React from "react"
import { BagProvider } from "./bags/BagProvider"
import BagList from "./bags/BagList"
import "./Capstone.css"
import "./bags/Bag.css"
import { ItemProvider } from "./items/ItemProvider"
import ItemList from "./items/ItemList"
import "./items/Item.css"
import Auth from "./auth/Auth"

  
export default  () => (
    
    <>
    
        <h2>Welcome to EzBuy!!</h2>

        <BagProvider>
        <ItemProvider>
            <BagList />
            <ItemList />
        </ItemProvider>
        </BagProvider>

        

        {/* <ItemProvider>
            <ItemList />
        </ItemProvider> */}
        
    </>
)
