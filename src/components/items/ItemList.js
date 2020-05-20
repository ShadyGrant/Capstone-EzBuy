import React, { useContext, useState } from "react"
import { ItemContext } from "./ItemProvider"
import { Item } from "./Item"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import ItemForm from "./ItemForm"
import { BagContext } from "../bags/BagProvider"


export default ({setActiveList, bagId}) => {
    const {items} = useContext(ItemContext)
    const {bags}  = useContext(BagContext)


    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const filteredItems = items.filter(i => { return i.bagId===bagId})


    return (
        <>
            <h1 className="header">Items</h1>
            

            <div className="text-center">
            <Button className="item_button" color="success" onClick={toggle}>Add New Item</Button>
            </div>
            
            <ul className="items">
            {
                    filteredItems.map(ite => {
                        // const matchingBag = bags.find(ba => ba.id === ite.bagId)
                       
                        return <Item key={ite.id} item={ite}
                            // bag={matchingBag}
                            setActiveList={setActiveList} />
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

    

