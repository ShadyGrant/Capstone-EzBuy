import React from "react"

export const Bag = ({ bag }) => (
    <section className="bag">
        <h3 className="bag__name">{bag.name}</h3>
        <div className="bag__describtion">{bag.describtion}</div>
    </section>
)