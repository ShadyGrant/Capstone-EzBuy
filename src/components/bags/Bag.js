import React, { useContext, useState } from "react"
import { BagContext } from "./BagProvider"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import {EditBagForm} from "./EditBagForm"
import {Route, Link } from "react-router-dom"

// export default () => {
//     const [editModal, setEditModal] = useState(false)
//     const toggleEdit = () => setEditModal(!editModal)
// }

// const [selectedBag, setBag]= useState({bag:{}})



   

export const Bag = ({ bag, setActiveList, setBagId }) => {
    // const [modal, setModal] = useState(false)
    // const toggle = () => setModal(!modal)

    // const [editModal, setEditModal] = useState(false)
    // const toggleEdit = () => setEditModal(!editModal)
    // const [activeList, setActiveList] = useState("bags")
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
        <Button className ="deleteButton" onClick={() => deleteBag(bag.id)}
        color="danger">Delete Bag</Button>
        <Button className ="editButton"  onClick={() => {setBag({bag}); toggleEdit()} }
        color="info">Edit Bag</Button>
        {/* <Button className="viewBag" onClick={()=> window.open("./viewBag/"+ bag.id, "_blank")}>View Bag</Button> */}
        {/* <Button className="viewBag" onClick={() => setActiveList("bags")}>View Bag</Button> */}
            <Button className="viewBag" onClick={() => {setBagId(bag.id) ;setActiveList("items")}}>View Items</Button>

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
