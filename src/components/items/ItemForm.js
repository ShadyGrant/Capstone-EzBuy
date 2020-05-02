import React, { useContext, useRef } from "react"
import { ItemContext } from "./ItemProvider"
import "./Item.css"


export default props => {
    const { addItem } = useContext(ItemContext)

    // Store references to the <input> elements below
    const name = useRef()
    const type = useRef()
    const websiteLink = useRef()
    const price = useRef()
    const describtion = useRef()
    const image = useRef()
    
    // Function to create an object and save it to the API
    const constructNewItem = () => {
        const newItemObj = {
            name: name.current.value,
            type: type.current.value,
            websiteLink: websiteLink.current.value,
            price: price.current.value,
            describtion: describtion.current.value,
            image: image.current.value
        }
        console.log(newItemObj)
        // and save it to the API.
        addItem(newItemObj).then(props.toggler)
    }

    return (
        <form className="itemForm">

            <h2 className="itemForm__title">New Item</h2>

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
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewItem()
                    }
                }
                className="btn btn-primary">
                Save Item
            </button>
        </form>
    )}