import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ItemContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ItemProvider = (props) => {
    const [items, setItems] = useState([])

    const getItems = () => {
        return fetch("http://localhost:8088/items")
            .then(res => res.json())
            .then(setItems)
    }

    const addItem = item => {
        return fetch("http://localhost:8088/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(getItems)
    }
    /*
        Load all Items when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getItems()
    }, [])

    useEffect(() => {
        console.log("****  Item APPLICATION STATE CHANGED  ****")
    }, [items])

    return (
        <ItemContext.Provider value={{
            items, addItem
        }}>
            {props.children}
        </ItemContext.Provider>
    )
}