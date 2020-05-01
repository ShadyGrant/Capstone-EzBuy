import React, { useContext, useState } from "react"
import { ItemContext } from "./ItemProvider"
import { Item } from "./Item"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
// import { BagContext } from "../bags/BagProvider"

export default () => {
    const {items} = useContext(ItemContext)
    // const {bags}  = useContext(BagContext)

    return (
        <>
            <h2>My Items</h2>

            {/* <button className="item_button" onClick={toggle}>Add New Item</button> */}

            <ul className="items">
            {
                    items.map(item => {
                        return <Item key={item.id} item={item} />
                    })
                }
            </ul>
         </>
    )
}

    

