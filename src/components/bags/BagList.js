import React, { useContext, useState } from "react"
import { BagContext } from "./BagProvider"
import {Bag} from "./Bag"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import BagForm from "./BagForm"


export default ({setActiveList, setBagId}) => {
    const {bags}  = useContext(BagContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h1 className="myBags">My Bags</h1>

            <div className="text-center">
            <Button className="bag_button" onClick={toggle}>Create New Bag</Button>
            </div>

            <ul className="bags">
                {
                    bags.map(bag => {
                        return <Bag
                         key={bag.id}
                         bag={bag} 
                         setBagId={setBagId}
                         setActiveList={setActiveList} /> 
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
