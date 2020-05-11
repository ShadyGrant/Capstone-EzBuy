import React, { useContext, useState } from "react"
import { BagContext } from "./BagProvider"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import {EditBagForm} from "./EditBagForm"


export const Bag = ({ bag, setActiveList, setBagId }) => {
   
    const [components, setComponents] = useState()

    const [selectedBag, setBag]= useState({bag:{}})

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)



    const {deleteBag} = useContext(BagContext)
    const {updateBag} = useContext(BagContext)

    return(
    <section className="bag">
        <h3 className="bag__name">{bag.name}</h3>
        <div className="bag__describtion">{bag.describtion}</div>

        <div className="text-center">
        <Button className ="deleteButton" onClick={() => deleteBag(bag.id)}
        color="danger">Delete Bag</Button>
        <Button className ="editButton"  onClick={() => {setBag({bag}); toggleEdit()} }
        color="info">Edit Bag</Button>
        <Button className="viewBag" onClick={() => {setBagId(bag.id) ;setActiveList("items")}}>View Items</Button>
        </div>

    <Modal isOpen={editModal} toggle={toggleEdit}>
         <ModalHeader toggle={toggleEdit}>
         {selectedBag.bag.id}
        </ModalHeader>
        <ModalBody>
         <EditBagForm key={selectedBag.bag.id} toggleEdit={toggleEdit} bag={bag} {...selectedBag} />
        </ModalBody>
    </Modal>
    </section>
    )}
