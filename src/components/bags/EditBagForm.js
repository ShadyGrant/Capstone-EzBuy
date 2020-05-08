import React, { useContext, useState, useRef } from "react"
import { BagContext } from "./BagProvider"



export const EditBagForm = ({ bag, toggleEdit, selectedBag }) => {
    const { updateBag } = useContext(BagContext)

    // Separate state variable to track the bag as it is edited
    const [ updatedBag, setBag ] = useState(bag)

    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const handleControlledInputChange = (event) => {
        const newBag = Object.assign({}, updatedBag)
        newBag[event.target.name] = event.target.value
        setBag(newBag)
    }
    const name = useRef()
    const describtion = useRef()

    const editBag = () => {
             updateBag({
                 id: bag.id,
                name: name.current.value,
                describtion: describtion.current.value
            })
           .then(toggleEdit)
        }

    return (
        <form className="bagForm">

        <h2 className="bagForm__title">Edit Bag</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="bagName">Bag Name: </label>
                <input
                    type="text"
                    id="bagName"
                    ref={name}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Bag name"
                    defaultValue={bag.name}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="bagDescribtion">Description: </label>
                <input
                    type="text"
                    id="bagDescribtion"
                    ref={describtion}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Bag describtion"
                    defaultValue={bag.describtion}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>

            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editBag()
                }}>
                Save Updates
            </button>
        </form>
    )
}