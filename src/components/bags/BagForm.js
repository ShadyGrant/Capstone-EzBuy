import React, { useContext, useRef } from "react"
import { BagContext } from "./BagProvider"
import "./Bag.css"

export default props => {
    const { addBag } = useContext(BagContext)

    // Store references to the <input> elements below
    const name = useRef()
    const describtion = useRef()
    
    // Function to create an object and save it to the API
    const constructNewBag = () => {
        const newBagObj = {
            name: name.current.value,
            describtion: describtion.current.value,
        }
        console.log(newBagObj)
        // and save it to the API.
        addBag(newBagObj).then(props.toggler)
    }

    return (
        <form className="bagForm">

            <h2 className="bagForm__title">New Bag</h2>
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
                        placeholder="Bag Name"
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
                        placeholder="Bag Describtion"
                    />
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewBag()
                    }
                }
                className="btn btn-primary">
                Save Bag
            </button>
        </form>
    )}
