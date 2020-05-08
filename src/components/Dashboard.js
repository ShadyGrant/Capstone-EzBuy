import React, { useContext, useState, useEffect } from "react"
import { BagProvider } from "./bags/BagProvider"
import BagList from "./bags/BagList"
import "./Capstone.css"
import "./bags/Bag.css"
import { ItemProvider } from "./items/ItemProvider"
import ItemList from "./items/ItemList"
import "./items/Item.css"
import Auth from "./auth/Auth"
import viewBag from "./viewBag"
import { BrowserRouter,Route } from "react-router-dom"
import { Button } from "reactstrap"
  


export default  () => {
    const [activeList, setActiveList] = useState("bags")
    const [components, setComponents] = useState()
    const [bagId, setBagId] =useState(0)

        
const showBags =()=>(
        <BagProvider>
            <BagList setActiveList={setActiveList} setBagId={setBagId}/>
        </BagProvider>
)

const showItems = () =>(
    <BagProvider>
    <ItemProvider>
        <ItemList  bagId={bagId}/>
    </ItemProvider>
    </BagProvider>
)

useEffect(() => {
    if (activeList === "bags") {
        setComponents(showBags)
    }
    else if (activeList === "items") {
        setComponents(showItems)
    }
}, [activeList])

return (
    <div className="dataContainer">
    <h1>Welcome to EzBuy!!</h1>
    <div className="listContainer">
        <div className="buttons">
            <Button className="viewBag" onClick={() => setActiveList("bags")}>Home</Button>
            {/* <Button className="viewItem" onClick={() => setActiveList("items")}>Items</Button> */}
        </div>
        <div className="listDisplay">
            {components}
        </div>
    </div>
</div>
)}
