import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BagContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BagProvider = (props) => {
    const [bags, setBags] = useState([])

    const getBags = () => {
        return fetch("http://localhost:8088/bags")
            .then(res => res.json())
            .then(setBags)
    }

    const addBag = bag => {
        return fetch("http://localhost:8088/bags", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bag)
        })
            .then(getBags)
    }
    const updateBag = bag => {
        return fetch(`http://localhost:8088/bags/${bag.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bag)
        })
            .then(getBags)
    }
    const deleteBag = bagId => {
        return fetch(`http://localhost:8088/bags/${bagId}`, {
            "Content-Type": "application/json",
            method: "DELETE"
        })
            .then(getBags)
    }

    /*
        Load all Bags when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getBags()
    }, [])

    useEffect(() => {
        console.log("****  Bag APPLICATION STATE CHANGED  ****")
    }, [bags])

    return (
        <BagContext.Provider value={{
            bags, addBag, updateBag, deleteBag
        }}>
            {props.children}
        </BagContext.Provider>
    )
}
