import React, { useContext, useState } from "react"
import { BagContext } from "./BagProvider"
import {Bag} from "./Bag"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import BagForm from "./BagForm"


export default () => {
    const {bags}  = useContext(BagContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    // const [editModal, setEditModal] = useState(false)
    // const toggleEdit = () => setEditModal(!editModal)

    // deleteBag = (index) => {
    //     const bags=Object.assign([], this.StaticRange.bags);
    //     bags.splice(index, 1);
    //     this.setState({bags:bags});

    // }

   

    return (
        <>
            <h2>My Bags</h2>

            <button className="bag_button" onClick={toggle}>Add New Bag</button>

            <ul className="bags">
                {
                    bags.map(bag => {
                        return <Bag
                         key={bag.id}
                         bag={bag} />

                         
                    })
                }
            </ul>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add New Bag
                </ModalHeader>
                <ModalBody>
                    <BagForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
            }
