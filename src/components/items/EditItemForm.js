import React, { useContext, useState, useRef } from "react"
import { ItemContext } from "./ItemProvider"


export const EditItemForm = ({ item, toggleEdit, selectedItem }) => {
    const { updateItem } = useContext(ItemContext)

    // Separate state variable to track the bag as it is edited
    const [ updatedItem, setItem ] = useState(item)

    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const handleControlledInputChange = (event) => {
        const newItem = Object.assign({}, updatedItem)
        newItem[event.target.name] = event.target.value
        setItem(newItem)
    }
    const name = useRef()
    const type = useRef()
    const websiteLink = useRef()
    const price = useRef()
    const describtion = useRef()
    const image = useRef()

    const editItem = () => {
             updateItem({
                id: item.id,
                name: name.current.value,
                type: type.current.value,
                websiteLink: websiteLink.current.value,
                price: price.current.value,
                describtion: describtion.current.value,
                image: image.current.value
            })
           .then(toggleEdit)
        }
        return (
            <form className="itemForm">
    
                <h2 className="itemForm__title">Edit Item</h2>
    
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="itemName">Item Name: </label>
                        <input
                            type="text"
                            id="itemName"
                            ref={name}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Item name"
                            defaultValue={item.name}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>
    
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="itemType">Item Type: </label>
                        <input
                            type="text"
                            id="itemType"
                            ref={type}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Item type"
                            defaultValue={item.describtion}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>
    
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="itemWebsiteLink">Website Link: </label>
                        <input
                            type="text"
                            id="itemWebsiteLink"
                            ref={websiteLink}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Item websiteLink"
                            defaultValue={item.websiteLink}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>
    
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="itemPrice">Item Price: </label>
                        <input
                            type="text"
                            id="itemPrice"
                            ref={price}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Item price"
                            defaultValue={item.price}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>
    
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="itemDescribtion">Item Describtion: </label>
                        <input
                            type="text"
                            id="itemDescribtion"
                            ref={describtion}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Item describtion"
                            defaultValue={item.describtion}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>
    
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="itemImage">Item Image URL: </label>
                        <input
                            type="text"
                            id="itemImage"
                            ref={image}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Item image"
                            defaultValue={item.image}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>

                <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editItem()
                }}>
                Save Updates
            </button>
        </form>
    )
}
