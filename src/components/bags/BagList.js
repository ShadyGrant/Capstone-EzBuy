import React, { useContext, useState } from "react"
import { BagContext } from "./BagProvider"
import { Bag } from "./Bag"


export default () => {
    const {bags}  = useContext(BagContext)

    return (
        <>
            <h2>Bags</h2>

            <ul className="bags">
                {
                    bags.map(bag => {
                        return <Bag key={bag.id} bag={bag} />
                    })
                }
            </ul>
        </>
    )
}