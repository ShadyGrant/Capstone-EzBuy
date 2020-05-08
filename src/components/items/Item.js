import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { ItemContext } from "./ItemProvider"
import { Link } from "react-router-dom"
import { EditItemForm } from "./EditItemForm"

export const Item = ({ item, setActiveList }) => {

    const [components, setComponents] = useState()

    const [selectedItem, setItem]= useState({item:{}})

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)



    
    const {updateItem} = useContext(ItemContext)


    const {deleteItem} = useContext(ItemContext)
    return(
    <section className="item">
        <div><img src={item.image} className="item_image"/></div>
        <h3 className="item__name">{item.name}</h3>
        <ul className="item__list">
        <li className="item__type">Type: {item.type}</li>
        <li className="item__websiteLink">Website Link: <a href={item.websiteLink}>{item.websiteLink}</a></li>
        <li className="item__price">Price: ${item.price}</li>
        <li className="item__describtion">Describtion: {item.describtion}</li>
        </ul>
        <Button className ="deleteItem" onClick={() => deleteItem(item.id)}
        color="danger">Delete Item</Button>

        <Button className ="editButton"  onClick={() => {setItem({item}); toggleEdit()} }
        color="info">Edit Item</Button>

    <Modal isOpen={editModal} toggle={toggleEdit}>
         <ModalHeader toggle={toggleEdit}>
         {selectedItem.item.id}
        </ModalHeader>
        <ModalBody>
         <EditItemForm key={selectedItem.item.id} toggleEdit={toggleEdit} item={item} {...selectedItem} />
        </ModalBody>
    </Modal>



    </section>
)
    }
