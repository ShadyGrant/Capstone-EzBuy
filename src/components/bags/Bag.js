import React, { useContext } from "react"
import { Button } from "reactstrap"
import { BagContext } from "./BagProvider"





export const Bag = ({ bag }) => {
    const {deleteBag} = useContext(BagContext)
    return(
    <section className="bag">
        <h3 className="bag__name">{bag.name}</h3>
        <div className="bag__describtion">Describtion: {bag.describtion}</div>
        <Button className ="deleteButton" onClick={() => deleteBag(bag.id)}
        color="danger">Delete Bag</Button>
    </section>
    )}