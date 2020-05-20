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
    <h1 className="title">Welcome to EzBuy!!</h1>
    <div className="listContainer">
        <div className="text-center">
            <Button className="Home" color="primary" size="lg"  onClick={() => setActiveList("bags")}>Home</Button>
        </div>
        <div className="listDisplay">
            {components}
        </div>
    </div>
</div>
)}
