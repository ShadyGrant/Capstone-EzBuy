import React, { useContext, useState } from "react"
import { ItemContext } from "./ItemProvider"
import { Item } from "./Item"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import ItemForm from "./ItemForm"
// import { BagContext } from "../bags/BagProvider"


export default () => {
    const {items} = useContext(ItemContext)
    // const {bags}  = useContext(BagContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>My Items</h2>

            <button className="item_button" onClick={toggle}>Add New Item</button>

            <ul className="items">
            {
                    items.map(item => {
                        return <Item key={item.id} item={item} />
                    })
                }
            </ul>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add New Item
                </ModalHeader>
                <ModalBody>
                    <ItemForm toggler={toggle} />
                </ModalBody>
            </Modal>
         </>
    )
}

    

